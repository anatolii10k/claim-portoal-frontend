
import { getNewPle, getOldPle } from "../../utils/addressHelpers";
import { getTokenBalance } from "../../utils/callHelper";
import provider from "../../utils/provider";
import oldPleToken from '../../config/abi/oldPleToken.json';
import newPleToken from '../../config/abi/newPleToken.json';
import { ActionTypes } from "../ActionTypes";
import { getBalanceNumber } from "../../utils/formatBalance";


const getBalance =async(dispatch,account) =>{
    
   if(account !=null){
    const balance = getBalanceNumber(await getTokenBalance(provider,oldPleToken,getOldPle(),account));
    const newbal = getBalanceNumber(await getTokenBalance(provider,newPleToken,getNewPle(),account));
    dispatch({type:ActionTypes.USER_BALANCE_SUCESS,payload:{
        oldB:balance,
        newB:newbal
    }});
  
   }
   else{
    dispatch({type:ActionTypes.USER_BALANCE_FAIL});

   }
 

}
export const getFetchTokenBalance = (account) =>{

    return dispatch =>{
       dispatch({type:ActionTypes.USER_BALANCE_START});
       getBalance(dispatch,account)
    }
}

export const reload = () =>{
    return(dispatch,getSate) =>{
        dispatch({type:ActionTypes.USER_BALANCE_RELOAD,payload:!getSate().balance.change})
    }
}