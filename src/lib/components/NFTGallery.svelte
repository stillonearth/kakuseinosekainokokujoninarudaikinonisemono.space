<script lang="ts">

  import { onMount } from "svelte";
  import { provider, account } from "../stores/web3Store";
  import { nfts } from "../stores/nftStore";
  import { tokenIdsByOwner, allTokenIds } from "../blockchain";
  import { fetchNFTData } from "../api";

  export let visible;
  import type { Story } from "../types/NFT";

  let stories: Story[] = [];
  // export let characters: Character[] = [];
  // export let narrativeCards: NarrativeCard[] = [];

  // let activeTab: "stories" | "characters" | "cards" = "stories";
  let tokenIds = [];

  async function loadNFTsForOwner() {
    if (!$account || !$provider) {
      return;
    }
    tokenIds = await tokenIdsByOwner($provider, $account);
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

  provider.subscribe(async (value) => {
    await loadAllNfts();
  });

  onMount(async () => {
    await loadAllNfts();
  });
</script>

{#if visible}
  <section id="collection" class="bg-gray-800 rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-bold mb-6 text-purple-400">Story NFTs</h2>
    {#if !!$account}
      <div class="w-full max-w-6xl mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each $nfts as story}
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={story.image}
                alt={story.name}
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">{story.name}</h3>
                <p class="text-gray-400">{story.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <p>Connect a <a href="https://metamask.io/">wallet</a> to view NFTs</p>
    {/if}
  </section>
{/if}
