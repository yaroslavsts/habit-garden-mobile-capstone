import AsyncStorage from '@react-native-async-storage/async-storage';
export const KEY = 'habit-garden.v1';
export const initialState = {version:1, accounts:[], session:null};
export async function loadGarden() {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return initialState;
  const data = JSON.parse(raw);
  if (data.version !== 1 || !Array.isArray(data.accounts) || data.accounts.some(a =>
    typeof a.email !== 'string' || typeof a.username !== 'string' || typeof a.hash !== 'string' || typeof a.salt !== 'string' || !Array.isArray(a.habits) ||
    a.habits.some(h=>typeof h.id!=='string'||typeof h.name!=='string'||!Array.isArray(h.days)))) {
    throw new Error('Saved data is unreadable. Existing data has not been overwritten.');
  }
  if (data.session && !data.accounts.some(a=>a.email===data.session)) data.session=null;
  return data;
}
export async function saveGarden(data) {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}
