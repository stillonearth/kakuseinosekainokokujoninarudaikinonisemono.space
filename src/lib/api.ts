export async function fetchNFTData(nftId: any) {
    const url = `https://kakuseinosekainokokujoninarudaikinonisemono.space/api/nft/${nftId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.id = nftId;
        return data;
    } catch (error) {
        console.error('Error fetching NFT data:', error);
        return null; // or throw the error as needed
    }
}