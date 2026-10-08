import React, {useEffect, useState} from 'react';
import {Label, Card, Action, ErrorMessage} from './ui';
import {loadGarden} from './storage';
export default function SavedProgressScreen(){
  const [account,setAccount]=useState(null),[error,setError]=useState(''),[loading,setLoading]=useState(true);
  async function refresh(){setLoading(true);setError('');try{const saved=await loadGarden();const current=saved.accounts.find(a=>a.email===saved.session);if(!current)throw new Error('Sign in to view your saved progress.');setAccount(current);}catch(e){setError(e.message);}finally{setLoading(false);}}
  useEffect(()=>{refresh();},[]);
  return <><Label large>Saved progress</Label><Label muted>Read directly from this device’s AsyncStorage. Refresh to verify your saved habits.</Label>{loading?<Label>Reading saved data…</Label>:account&&<><Card><Label>{account.username}</Label><Label>{account.habits.length} saved habits</Label></Card>{account.habits.map(h=><Card key={h.id}><Label>{h.name}</Label><Label>{h.days.length} completed days</Label><Label muted>{h.days.length?h.days.join(', '):'No completion recorded yet.'}</Label></Card>)}</>}<ErrorMessage>{error}</ErrorMessage><Action label="Refresh saved data" disabled={loading} onPress={refresh}/></>;
}
