import {InjectedConnector} from '@web3-react/injected-connector'
import WalletConnectProvider from "@walletconnect/web3-provider";

export const injected = new InjectedConnector({supportedChainIds:[1,3,4,5,42]});


const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    qrcodeModalOptions: {
        mobileLinks: [
          "trust",     
        ],
      },
  });