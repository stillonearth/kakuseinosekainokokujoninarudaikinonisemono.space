export function user_connected_wallet() {
    return window.connectedWallet;
}

export function mode() {
    if (!!window.gameMode) {
        return window.gameMode
    } else {
        return "game";
    }
}

export function nft_link() {
    if (!!window.nftLink) {
        return window.nftLink;
    }
    return null;
}

