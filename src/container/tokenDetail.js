import React,{useState,useEffect} from 'react'
import {useWeb3React} from '@web3-react/core'
import {connect} from 'react-redux'
import {ActionCreators} from '../store/action'
import {bindActionCreators} from 'redux'
import { useHistory } from 'react-router';
import { AccountContainer } from '../components/AccountContainer/accountContainer';


const TokenDetail =(props) =>{
    const {Balance,getFetchTokenBalance,reload} = props;

    const history = useHistory()
    const {activate,deactivate,account,active,library,chainId} = useWeb3React();
    const [status,setStatus] = useState(active);
   
    useEffect(() => {
        setStatus(active);
    }, [active]);
    
    useEffect(()=>{
        if(account !=null){
            getFetchTokenBalance(account);
        }
      

    },[])

    const goToHomepage =()=>{
        deactivate();
        history.push('/');   
    }
    return(
       <div>
          <AccountContainer/> 
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
  
export default connect(mapStateToProps,mapDispatchToProps)(TokenDetail);