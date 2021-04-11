import {ethers} from 'ethers'
import { toWei } from "web3-utils";
import Web3 from 'web3'


export const getContract = (provider,abi,address)=>{
  
    const web3 = new Web3(provider)
    const contract =new web3.eth.Contract(abi,address);
    return contract;
}

export const getTokenBalance =async (provider,abi,pleAddress,userAddress) =>{

     const contract = getContract(provider,abi,pleAddress);
    

   try{
          const balance =await contract.methods.balanceOf(userAddress).call();
         
          return balance
   } catch(e){
       return '0';
   }

}
export const approve= async (
    pleContract,
    claimPortalAddress,
    account,
    amount
  ) => {
    
    return pleContract.methods
      .approve(claimPortalAddress, toWei(amount, "ether"))
      .send({ from: account })
      .on("transactionHash", (tx) => {
       
        return tx.transactionHash;
      });
  };


export const enter = async (claimPortalContract, amount, account) => {
  
    return claimPortalContract.methods
      .swap(toWei(amount, "ether"))
      .send({ from: account })
      .on("transactionHash", (tx) => {
       console.log("transaction issue...",tx.transactionHash);
        return tx.transactionHash;
      });
  };


  export const getClaimPromise = async (claimPortalContract,account) => {
    return claimPortalContract.methods
      .claim()
      .send({ from: account })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  };

  // export const getClaimPromise = (claimPortalContract,account) =>new Promise(async(resolve,reject)=>{
   
  //   try{
  //     claimPortalContract.methods
  //     .claim()
  //     .send({ from: account })
  //     .on("transactionHash", (tx) => {
  //       resolve(tx.transactionHash);
  //     });
  //   } catch(e){
  //     console.log("promise error",e)
  //       resolve('');
  //   }
     
  // })


  