import addresses from '../config/constants/contracts';

const chainId = process.env.REACT_APP_CHAIN_ID;


export const getOldPle =() =>{
    return addresses.oldPleToken['4']
}

export const getNewPle=()=>{
    return addresses.pleToken['4']
}

export const getPleEscrow =()=>{
    
    return addresses.pleEscrow['4']
}
