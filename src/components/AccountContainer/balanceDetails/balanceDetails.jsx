import React,{useEffect} from 'react';
import {useWeb3React} from '@web3-react/core';
import {getBalanceNumber} from '../../../utils/formatBalance'
import {connect} from 'react-redux'
import {ActionCreators} from '../../../store/action'
import {bindActionCreators} from 'redux'
import { getOldPle, getNewPle,getPleEscrow } from "../../../utils/addressHelpers";
import oldPleToken from '../../../config/abi/oldPleToken.json';
import newPleToken from '../../../config/abi/newPleToken.json';
import provider from '../../../utils/provider';
import './balanceDetails.scss';
import { useTokenBalance,useNewTokenBalance } from '../../../hooks/useTokenBalance';

const BalanceDetails = (props) =>{
    const {Balance,getFetchTokenBalance,reload} = props;
 
    const {account,activate,library} = useWeb3React();
    useEffect(() => {
        getFetchTokenBalance(account);
    }, [])
    useEffect(()=>{
     getFetchTokenBalance(account);
    },[account,Balance.change])
  
    const oldPleBalance = getBalanceNumber(useTokenBalance(getOldPle(),oldPleToken,provider,account,Balance.change));
    const newPleBalance = getBalanceNumber(useNewTokenBalance(getNewPle(),newPleToken,provider,account,Balance.change));
    return(
        <div className="balanceDetails">
            <div className="balanceContainer">
                <h4>My Old PLE Balance:</h4>
                <span>{Balance.bal.oldB}</span>
            </div>
            <div className="balanceContainer">
                <h4>My New PLE Balance:</h4>
                <span>{Balance.bal.newB}</span>
            </div>
        </div>
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
  
export default connect(mapStateToProps,mapDispatchToProps)(BalanceDetails);