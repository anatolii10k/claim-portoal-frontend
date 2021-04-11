import React from 'react';
import './accountContainer.scss';
import TokenDetails from './tokenDetails/tokenDetails';
import BalanceDetails from './balanceDetails/balanceDetails';

export const AccountContainer = () =>{
    return(
        <div className="accountContainer">
            <h3>Investor account Information</h3>
            <div className="subAccountContainer">
                <TokenDetails/>
                <BalanceDetails myBalance="0"/>
            </div>
        </div>
    )
}