import React, { useState ,useEffect} from 'react';
// import { TranscationList } from '../components/TranscationList/transcationList';
// import { AccountContainer } from '../components/AccountContainer/accountContainer';
import './home.scss';
import {useHistory} from 'react-router-dom';
import {useWeb3React} from '@web3-react/core'
import { injected } from '../config/connectors/connector';
// import { CustomModal } from '../components/Modal/customModal';

export const Home = () =>{
    const history = useHistory();
    const {activate,active,account,deactivate,library,chainId} = useWeb3React();
    const [activeMetaClass,setActiveMetaClass] = useState("");
    const [activeTrustClass,setActiveTrustClass] = useState("");
    const [metaActive,setMetaActive] = useState(false);
    const [trustActive,setTrustActive] = useState(false);
    const [metaActive2,setMetaActive2] = useState(true);
    const [trustActive2,setTrustActive2] = useState(true);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [status,setStatus] = useState(active);

    useEffect(() => {
        setStatus(active);
    }, [active])
    const gotoTokenDetailsPage = ()=>{
        activate(injected);
   
        history.push('/tokenDetails');
       
     
    }

    const addMetaCSS = (activeClass)=>{
        setActiveMetaClass(activeClass);
        setMetaActive(true);
        setTrustActive(false);
        setActiveTrustClass("");
        setShowErrorModal(true);
        setTrustActive2(false);
        setMetaActive2(true);
    }
    const addTrustCSS = (activeClass)=>{
        setActiveTrustClass(activeClass);
        setTrustActive(true);
        setMetaActive(false);
        setActiveMetaClass("");
        setShowErrorModal(true);
        setMetaActive2(false);
        setTrustActive2(true);
    }

    const openErrorModal = ()=>{
        setShowErrorModal(!showErrorModal)
      }

    return(
        <div className="mainHome">
            <div className="homeData">
                <div className="homeHeader">
                    <p>SWAP PORTAL</p>
                    {/* <h4>PRIVATE SALE</h4> */}
                </div>
                <div className="tilesContainer">
                    <div className={`metaTile ${activeMetaClass}`} onClick={()=>addMetaCSS("metaTileActive")}>
                        <div style={{ visibility: metaActive ? "visible" : "hidden" }} className="tickMark1">
                        </div>
                        <img src="./metamask.png"  style={{filter: !metaActive2 ? "grayscale(108%)" : ""}}/>
                        <p>MetaMask</p>
                    </div>
                    {/* <div className={`trustTile ${activeTrustClass}`} onClick={()=>addTrustCSS("trustTileActive")}>
                        <div style={{ visibility: trustActive ? "visible" : "hidden" }} className="tickMark1">
                        </div>
                        <img src="./Trust_Wallet.png" style={{filter: !trustActive2 ? "grayscale(108%)" : ""}}/> 
                        <p>Trust Wallet</p>
                    </div> */}
                </div>

            

                <div className="walletMainContainer">
                    <button className="walletButton" onClick={()=>gotoTokenDetailsPage()}>CONNECT WALLET</button>
                </div>
           
                <div className="priceMainContainer">
                  
                    <h5>RATE</h5>
                    <div className="imageContainer">
                        <div className="image1">
                            <div className="image">
                                <img src="./plethori_logo.png" style={{width:30}}></img>
                            </div>
                            <div className="textBox">
                                1 PLE
                            </div>
                        </div>
                        <div className="image2">
                            <span className="equalTwo">=</span>
                            <span className="image">
                                
                            <img src="./plethori_logo.png" style={{width:30}}></img>
                            </span>
                            <span className="textBox">
                                1 PLE
                            </span>
                        </div>
                    </div> 
                </div>
               
            </div>

            </div>
    )
}