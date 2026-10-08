import React,{useState} from 'react';
import {Label,Field,Action,ErrorMessage} from './ui';
export default function AuthScreens({mode,onNavigate,onSignup,onLogin}) {
  const [username,setUsername]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
  const signup=mode==='signup';
  async function submit(){setError('');setBusy(true);try {await (signup?onSignup(username,email,password):onLogin(email,password));}catch(e){setError(e.message||'Unable to continue. Please try again.');}finally{setBusy(false);setPassword('');}}
  return <><Label large>{signup?'Plant your first habit':'Small steps.\nStronger habits.'}</Label><Label muted>{signup?'Create your local account.':'Welcome back. Pick up where you left off.'}</Label>{signup&&<Field label="Username" value={username} onChangeText={setUsername}/>}<Field label="Email" value={email} onChangeText={setEmail}/><Field label="Password" value={password} onChangeText={setPassword} secure/><ErrorMessage>{error}</ErrorMessage><Action label={busy?'Please wait…':signup?'Sign up':'Log in'} onPress={submit} disabled={busy}/><Action secondary label={signup?'Already have an account? Log in':'New here? Create an account'} disabled={busy} onPress={()=>onNavigate(signup?'login':'signup')}/><Label muted>Offline learning prototype. Use a test email and a disposable password.</Label></>;
}
