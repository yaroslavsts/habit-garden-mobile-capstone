import * as Crypto from 'expo-crypto';
import {pbkdf2Async} from '@noble/hashes/pbkdf2';
import {sha256} from '@noble/hashes/sha256';
import {bytesToHex} from '@noble/hashes/utils';
export const normalizeEmail = value => value.trim().toLowerCase();
export function signupError(username,email,password) {
  if (username.trim().length<2) return 'Enter a username with at least 2 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email))) return 'Enter a valid email address.';
  if (password.length<8) return 'Use a password with at least 8 characters.';
  return '';
}
async function derive(password,salt) {
  return bytesToHex(await pbkdf2Async(sha256,password,salt,{c:100000,dkLen:32,asyncTick:10}));
}
export async function createCredentials(password) {
  const salt=bytesToHex(await Crypto.getRandomBytesAsync(16));
  return {salt,hash:await derive(password,salt)};
}
export async function matchesPassword(account,password) {
  const candidate=await derive(password,account.salt);
  let difference=candidate.length ^ account.hash.length;
  for(let i=0;i<candidate.length;i++) difference|=candidate.charCodeAt(i)^account.hash.charCodeAt(i);
  return difference===0;
}
// Local learning prototype only. A production app needs server-side authentication,
// authorization, secure session storage, rate limiting and account recovery.
