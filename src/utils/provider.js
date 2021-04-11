import { ethers } from "ethers"
// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const provider = window.ethereum;
export default provider;