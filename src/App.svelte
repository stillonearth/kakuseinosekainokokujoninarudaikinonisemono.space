<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import GamePlaceholder from "./lib/components/GamePlaceholder.svelte";
  import NFTGallery from "./lib/components/NFTGallery.svelte";
  import NewsSection from "./lib/components/NewsSection.svelte";
  import GameRules from "./lib/components/GameRules.svelte";
  import MarketplaceLinks from "./lib/components/MarketplaceLinks.svelte";
  import { activeSection } from "./lib/stores/navigationStore";
</script>

<main class="min-h-screen bg-gray-900 text-white">
  <Header />

  <div class="max-w-7xl mx-auto py-8 px-4">
    <GamePlaceholder visible={$activeSection == "game"} />

    <NewsSection visible={$activeSection == "news"} />

    <MarketplaceLinks />

    <NFTGallery visible={$activeSection == "nfts"} />

    <GameRules visible={$activeSection == "rules"} />
  </div>
  <center style="margin-top: -30px; padding-bottom: 30px;">
    <a
      href="https://soneium.org/"
      style="font-family:'Courier New', Courier, monospace"
    >
      <img src="/public/soneium.webp" alt="soneium" style="height: 70px" />
    </a>
  </center>
</main>

<style>
  :global(body) {
    background-color: #1a1a1a;
    margin: 0;
    padding: 0;
  }

  :global(.font-japanese) {
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ",
      Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  }
</style>
