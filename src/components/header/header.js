import React, { useEffect } from 'react';
import './header.scss';
import { useHistory } from 'react-router';
import { useWeb3React } from '@web3-react/core';

export const Header = () =>{
    const history = useHistory();
    const {active,account,deactivate} = useWeb3React();

    useEffect(()=>{
      if(account == null){
          history.push('/')
      }
    },[account])
    const redirectToHomePage = ()=>{
        deactivate();
        history.push("/");
    }
    return(
        <div className="header">
            <div className="imageContainer">
                <img src="./plethori_logo.png"/>
            </div>
            <p className="textImage">Plethori</p>
            <div className="blockContainer">
                {
                    account !==null && active &&(
                        <button className="walletButton" onClick={()=>redirectToHomePage()}>Disconnect</button>
                    )
                }
              
            </div>
        </div>
    )
}