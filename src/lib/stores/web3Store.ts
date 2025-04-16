import { writable } from 'svelte/store';
import { ethers } from 'ethers';
// import { persisted } from 'svelte-persisted-store'

export const provider = writable(null);
export const account = writable(null);
export const connected = writable(false);

async function addMinatoTestnet() {
  let chainId = ethers.toQuantity(1946);
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: chainId,
        chainName: 'Soneium Minato',
        nativeCurrency: {
          name: 'Minato',
          symbol: 'ETH',
          decimals: 18
        },
        rpcUrls: ['https://rpc.minato.soneium.org/'],
        blockExplorerUrls: ['https://soneium-minato.blockscout.com/']
      }]
    });
  } catch (error) {
    console.error('Error adding Minato Testnet:', error);
  }
}

export const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {

    await addMinatoTestnet();

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      connected.set(true);
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      account.set(accounts[0]);
      window.connectedWallet = accounts[0];

      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      provider.set(ethProvider);

    } catch (error) {
      console.error("User rejected connection:", error);
    }
  }
};