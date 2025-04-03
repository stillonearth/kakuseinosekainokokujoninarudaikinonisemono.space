import { ethers } from 'ethers';

import * as nft from "./abis/nft.json";

const CONTRACT_ABI = nft.abi;
const CONTRACT_ADDRESS = "0x021b9865D69725345d7A6e335A5051895C003450";

export async function nftBalanceOf(walletProvider: ethers.ContractRunner, owner: string) {
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        walletProvider
    );

    return await nftContract.balanceOf(owner);
}

export async function nftTotalSupply(walletProvider: ethers.ContractRunner) {
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        walletProvider
    );

    return await nftContract.totalSupply();
}

export async function nftTokenOwnerByIndex(walletProvider: ethers.ContractRunner, owner: string, index: any) {
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        walletProvider
    );

    return await nftContract.tokenOfOwnerByIndex(owner, index);
}

export async function nftTokenByIndex(walletProvider: ethers.ContractRunner, index: any) {
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        walletProvider
    );

    return await nftContract.tokenByIndex(index);
}


export async function tokenIdsByOwner(walletProvider: any, owner: any) {
    let nTokens = await nftBalanceOf(walletProvider, owner);
    const nftTokenIds: number[] = [];

    for (let i = 0; i < nTokens; i++) {
        const tokenId = parseInt(await nftTokenOwnerByIndex(walletProvider, owner, i), 10);
        nftTokenIds.push(tokenId);
    }

    return nftTokenIds;
}

export async function allTokenIds(walletProvider: any) {
    let nTokens = await nftTotalSupply(walletProvider);
    const nftTokenIds: number[] = [];

    for (let i = 0; i < nTokens; i++) {
        const tokenId = parseInt(await nftTokenByIndex(walletProvider, i), 10);
        nftTokenIds.push(tokenId);
    }

    return nftTokenIds;
}
