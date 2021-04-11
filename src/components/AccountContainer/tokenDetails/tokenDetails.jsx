import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import {useWeb3React} from '@web3-react/core';
import contracts from '../../../config/constants/contracts'
import oldPleToken from '../../../config/abi/oldPleToken.json'
import claimPortal from '../../../config/abi/claimPortal.json'

import './tokenDetails.scss';
import { useApprove } from '../../../hooks/useApprove';
import { useEnter } from '../../../hooks/useEnter';
import {connect} from 'react-redux'
import {ActionCreators} from '../../../store/action'
import {bindActionCreators} from 'redux'

import { getOldPle, getPleEscrow } from '../../../utils/addressHelpers';
import { getBalanceNumber } from '../../../utils/formatBalance';
import { useTokenBalance } from '../../../hooks/useTokenBalance';
import provider from '../../../utils/provider';
import { useClaim } from '../../../hooks/useClaim';

const TokenDetails = (props) =>{
    const {Balance,getFetchTokenBalance,reload} = props;

    const history = useHistory(); 
    const {account,activate} = useWeb3React();
    const[oldToken,setOldToken] = useState(contracts.oldPleToken['1']);
    const [newToken,setNewToken] = useState(contracts.pleToken['1']);
    const [contract,setContract] = useState(contracts.pleEscrow['1'])
    const oldPleBalance = getBalanceNumber(useTokenBalance(getOldPle(),oldPleToken,provider,account,Balance.change));
    const {onApprove} = useApprove(getOldPle(),getPleEscrow(),oldPleToken,oldPleBalance.toString(),provider,account);

    const {onHandleEnter} = useEnter(getPleEscrow(),claimPortal,provider,account,oldPleBalance.toString());
    const {onHandleClaim} = useClaim(getPleEscrow(),claimPortal,provider,account);

    const [change,setChange] = useState(false);
    const [approve,setApprove] = useState(false);
    const [flag,setFlag] = useState(false);
  useEffect(() => {
      

  }, [])
  
  const clickApprove =async() =>{
    const res=await onApprove();
    if(res.status){
      setApprove(true);
    }
  } 

  const sendOldToken = async()=>{
        
        try{
           
               const res = await onHandleEnter();
               if(res.status){
                reload();
                setFlag(true);
               }
               setChange(true);
         }catch(e){
            console.error(e);
         }
       
    }
    useEffect(()=>{
             reload();
             getFetchTokenBalance(account);
       },[change])
    const receiveNewToken = async()=>{
       
        const res = await onHandleClaim();
        reload();
        setChange(false);
    }
    return(
        <>
        <div className="tokenDetails">

            {/* 1st row */}
            <div className="tokenTable">
            <div className="eachRow">
                <div className="label">
                   Old Token
                </div>
                <div className="values">
                    {oldToken}
                </div>
            </div>

            {/* 2nd row */}
            <div className="eachRow">
                <div className="label">
                    New Token
                </div>
                <div className="values">
                    {newToken}
                </div>
            </div>

            {/* 3rd row */}
            <div className="eachRow">
                <div className="label">
                    My Address
                </div>
                <div className="values">
                    {account}
                </div>
            </div>

            {/* 4th row */}
            <div className="eachRow">
                <div className="label">
                    Contract Address
                </div>
                <div className="values">
                    {contract}
                </div>
            </div>

            {/* 5th row */}
            {/* <div className="eachRow">
                <div className="label">
                    Amount
                </div>
                <div className="values">
                    Fixed amount from the White List
                </div>
            </div> */}
            </div>
            {
                approve&&(
                    <button onClick={()=>sendOldToken()}className="sendButton">{flag?'SUCCESS':'SWAP'}</button>
                )
            }
            {
                !approve&&(
                    <button onClick={()=>clickApprove()}className="sendButton">APPROVE</button>

                )
            }
           
            
        </div>
        
        </>

    )
}


const mapStateToProps = ({balance}) =>{
 
    return{
        Balance:balance,
    }
  
  }
  
  const mapDispatchToProps = dispatch =>{
  
    return bindActionCreators(ActionCreators,dispatch);
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TokenDetails);