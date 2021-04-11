
import {useEffect,useState,useCallback} from 'react'
import { approve, enter,getClaimPromise, getContract } from '../utils/callHelper';

export const useClaim =(claimPortalAddress,abi,provider,account)=>{
    const [txHash,setTxHash] = useState("")
    const claimContract = getContract(provider,abi,claimPortalAddress);
   
     const handleClaim = useCallback(async()=>{
      
            try{
                const tx = await getClaimPromise(claimContract,account);
                return tx
            } catch(e){
                console.log(e);
                return false
            }
     },[account,provider,claimPortalAddress])

    return {onHandleClaim:handleClaim};
}