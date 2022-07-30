import React, { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL='https://opentdb.com/'
const useAxios = ({url}) => {
 const [response,setResponse]=useState(null);
 const [loading, setLoading]=useState(true);
 const [error,setError]=useState('');

 useEffect(()=>{

    const fetchdata= async ()=>{
       try{
        const data=await axios.get(url);
        setResponse(data.data)
        
    }
    catch(err){
        setError(err);
    }
    finally{
        setLoading(false)
    } 
        
    }
    fetchdata();

 },[url])

  return {response,loading,error}
}

export default useAxios