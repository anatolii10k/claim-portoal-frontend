
import {useEffect,useState,useCallback} from 'react'
import { approve, getContract } from '../utils/callHelper';

export const useApprove =(pleAddress,claimPortalAddress,pleAbi,amount,provider,account)=>{
    const [txHash,setTxHash] = useState("")
    const pleContract = getContract(provider,pleAbi,pleAddress);
   
     const handleApprove = useCallback(async()=>{
      
            try{
                const tx = await approve(pleContract,claimPortalAddress,account,amount);
                return tx
            } catch(e){
                console.log(e);
                return false
            }
     },[account,provider,pleAddress,claimPortalAddress,amount])

    return {onApprove:handleApprove};
}