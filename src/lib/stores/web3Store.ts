import { writable } from 'svelte/store';
import type { Web3Provider } from '@ethersproject/providers';

export const provider = writable<Web3Provider | null>(null);
export const account = writable<string | null>(null);
export const connected = writable<boolean>(false);

export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      connected.set(true);
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      account.set(accounts[0]);
    } catch (error) {
      console.error('User rejected connection:', error);
    }
  }
};