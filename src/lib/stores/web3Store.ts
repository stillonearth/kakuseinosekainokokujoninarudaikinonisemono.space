import { writable } from "/node_modules/.vite/deps/svelte_store.js?v=af51a6a9";
export const provider = writable(null);
export const account = writable(null);
export const connected = writable(false);
export const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      connected.set(true);
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      account.set(accounts[0]);
      window.connectedWallet = accounts[0];
    } catch (error) {
      console.error("User rejected connection:", error);
    }
  }
};