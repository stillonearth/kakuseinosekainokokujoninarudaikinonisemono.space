<script lang="ts">
  import init, * as bindings from "./../../kakuseinosekainokokujoninarudaikinonisemono";

  // This component will be replaced with the actual WASM game implementation
  let gameStarted = false;

  async function startGame() {
    gameStarted = true;

    document.getElementById("loading-screen").style.display = 'none';

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
      new CustomEvent("TrunkApplicationStarted", { detail: { wasm } })
    );
  }
</script>

<section id="game" class="bg-gray-800 rounded-lg p-6 mb-8">
  <h2 class="text-2xl font-bold mb-4 text-white">Poker Visual Novel Game</h2>
  {#if !gameStarted}
    <button
      on:click={startGame}
      class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
    >
      Start Game
    </button>
  {/if}

  <div
    class="bg-gray-700 p-8 rounded-lg text-center {gameStarted ? '' : 'hidden'}" 
    style="overflow: hidden"
  >
    <div id="loading-screen" class="center">
      <span class="spinner"></span>
    </div>

    <canvas id="bevy"> Javascript and canvas support is required </canvas>
  </div>
</section>

<style>
  .hidden {
    display: none;
  }
</style>
