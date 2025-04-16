<script lang="ts">
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";
  import { provider, account } from "../stores/web3Store";
  import { nfts } from "../stores/nftStore";
  import { tokenIdsByOwner, allTokenIds } from "../blockchain";
  import { fetchNFTData } from "../api";

  import init, * as bindings from "./../../kakuseinosekainokokujoninarudaikinonisemono";

  export let visible = true;
  export let visiblePlayer = false;
  let gameStarted = false;
  export let visibleList = true;
  import type { Story } from "../types/NFT";

  let stories: Story[] = [];
  let tokenIds = [];

  async function loadAllNfts() {
    if (!$provider) {
      return;
    }

    tokenIds = await allTokenIds($provider);
    stories = [];
    for (const tokenId of tokenIds) {
      try {
        let nft = await fetchNFTData(tokenId);
        if (!!nft) {
          stories.push(nft);
        }
      } catch {
        continue;
      }
    }

    nfts.update((value) => stories);
  }

  async function showNft(id) {
    window.gameMode = "player";
    window.nftLink =
      "https://kakuseinosekainokokujoninarudaikinonisemono.space/api/nft/" + id;

    visiblePlayer = true;
    visibleList = false;

    await startGame();
  }

  provider.subscribe(async (value) => {
    await loadAllNfts();
  });

  async function startGame() {
    gameStarted = true;

    const observer = new MutationObserver(() => {
      const bevy = document.getElementById("bevy");
      if (bevy.height > 1) {
        loading_screen.style.display = "none";
        observer.disconnect();
      }
    });
    observer.observe(bevy, { attributeFilter: ["height"] });

    const wasm = await init({
      module_or_path:
        "./public/kakuseinosekainokokujoninarudaikinonisemono.wasm?url",
    });

    window.wasmBindings = bindings;
    dispatchEvent(
      new CustomEvent("TrunkApplicationStarted", { detail: { wasm } }),
    );
  }

  onMount(async () => {
    visiblePlayer = false;
    visibleList = true;
    await loadAllNfts();
  });
</script>

{#if visible}
  <section
    id="game"
    class="bg-gray-800 rounded-lg p-6 mb-8 {gameStarted ? '' : 'hidden'}"
  >
    <div class="rounded-lg text-center" style="overflow: hidden">
      <canvas id="bevy">
        <div id="loading-screen" class="center">
          <span class="lds-dual-ring"></span>
        </div></canvas
      >
    </div>
  </section>

  {#if visibleList}
    <section id="collection" class="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-6 text-purple-400">Story NFTs</h2>
      {#if !!$account}
        <div class="w-full max-w-6xl mx-auto p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each $nfts as story}
              <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <a
                  href="#collection/{story.id}"
                  on:click={async () => await showNft(story.id)}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-bold">{story.name}</h3>
                    <p class="text-gray-400">{story.description}</p>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <p>Connect a <a href="https://metamask.io/">wallet</a> to view NFTs</p>
      {/if}
    </section>
  {/if}
{/if}

<style>
  .lds-dual-ring {
    /* change color here */
    color: #1c4c5b;
  }
  .lds-dual-ring,
  .lds-dual-ring:after {
    box-sizing: border-box;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
