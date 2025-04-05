<script lang="ts">
  import { connected, connectWallet, account } from "../stores/web3Store";

  export let visible;

  import init, * as bindings from "./../../kakuseinosekainokokujoninarudaikinonisemono";

  // This component will be replaced with the actual WASM game implementation
  let gameStarted = false;

  async function startGame() {
    gameStarted = true;

    // document.getElementById("loading-screen").style.display = "none";

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
</script>

{#if visible}
  <section id="game" class="bg-gray-800 rounded-lg p-6 mb-8">
    {#if !gameStarted && !!$account}
      <button
        on:click={startGame}
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
    {:else if !gameStarted}
      <p>Connect a <a href="https://metamask.io/">wallet</a> to play game</p>
    {/if}

    <div
      class="rounded-lg text-center {gameStarted
        ? ''
        : 'hidden'}"
      style="overflow: hidden"
    >
      <canvas id="bevy">
        <div id="loading-screen" class="center">
          <span class="lds-dual-ring"></span>
        </div></canvas
      >
    </div>
  </section>
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
