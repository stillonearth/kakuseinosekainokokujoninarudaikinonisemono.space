import { ethers } from 'ethers';

import * as nft from "./abis/nft.json";

const CONTRACT_ABI = nft.abi;
const CONTRACT_ADDRESS = "0xacD185CDF9B79e9B762eB19f167f874a51E8dd68";

export async function getNFTCount(walletProvider: ethers.ContractRunner, address: string) {
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        walletProvider
    );

    return await nftContract.balanceOf(address);
}
