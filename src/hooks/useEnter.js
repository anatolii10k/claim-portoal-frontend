
import {useEffect,useState,useCallback} from 'react'
import { approve, enter, getContract } from '../utils/callHelper';

export const useEnter =(claimPortalAddress,abi,provider,account,amount)=>{
    const [txHash,setTxHash] = useState("")
    const claimContract = getContract(provider,abi,claimPortalAddress);
    
     const handleEnter = useCallback(async()=>{
      
            try{
                const tx = await enter(claimContract,amount,account);
                return tx
            } catch(e){
                console.log(e);
                return false
            }
     },[account,provider,claimPortalAddress,amount])

    return {onHandleEnter:handleEnter};
}