import React,{useState,useEffect,useRef} from 'react';
import {Label,Card,Action,ErrorMessage} from './ui';
export default function ApiScreen(){
  const [quote,setQuote]=useState(null),[error,setError]=useState(''),[loading,setLoading]=useState(false);
  const controller=useRef(null);
  useEffect(()=>()=>controller.current?.abort(),[]);
  async function refresh(){controller.current?.abort();const request=new AbortController();controller.current=request;setLoading(true);setError('');const timer=setTimeout(()=>request.abort(),10000);
    try{const response=await fetch('https://dummyjson.com/quotes/random',{signal:request.signal});if(!response.ok)throw new Error('The quote service is unavailable.');const data=await response.json();if(typeof data.quote!=='string'||typeof data.author!=='string')throw new Error('The quote service returned unexpected data.');if(controller.current===request)setQuote(data);}
    catch(e){if(controller.current===request)setError(e.name==='AbortError'?'Request timed out. Check your connection and retry.':e.message||'Unable to load a quote.');}
    finally{clearTimeout(timer);if(controller.current===request)setLoading(false);}
  }
  return <><Label large>A little inspiration</Label><Label muted>Discover a quote for your next small step.</Label><Card><Label>{quote?quote.quote:'Get a quote from the web.'}</Label>{quote&&<Label muted>— {quote.author}</Label>}</Card><Label muted>Source: DummyJSON Quotes{quote?' · Retrieved from the API':''}</Label><ErrorMessage>{error}</ErrorMessage><Action label={loading?'Loading…':'Get another quote'} onPress={refresh} disabled={loading}/></>;
}
