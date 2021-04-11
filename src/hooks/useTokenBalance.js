import {useEffect,useState} from 'react'
import BigNumber from 'bignumber.js'
import {useWeb3React} from '@web3-react/core'
import { getTokenBalance } from '../utils/callHelper';


export const useTokenBalance =(tokenAddress,abi,provider,account, reload) =>{
    const [balance,setBalance] = useState(new BigNumber(0));

    useEffect(()=>{
        const fetchBalance = async()=>{
            const res = await getTokenBalance(provider,abi,tokenAddress,account);
        
            setBalance(new BigNumber(res));
        }
        if (account && provider){
            fetchBalance();
        }
      
    }, [account, reload])
 
    return balance;
    
 } 

 export const useNewTokenBalance =(tokenAddress,abi,provider,account, reload) =>{
    const [balance,setBalance] = useState(new BigNumber(0));

    useEffect(()=>{
        const fetchBalance = async()=>{
            const res = await getTokenBalance(provider,abi,tokenAddress,account);
        
            setBalance(new BigNumber(res));
        }
        if (account && provider){
            fetchBalance();
        }
      
    }, [account, reload])
 
    return balance;
    
 } 