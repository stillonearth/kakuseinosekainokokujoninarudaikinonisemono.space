<script lang="ts">
  import { connected, connectWallet } from '../stores/web3Store';
</script>

<header class="bg-gray-800 p-4 border-b border-gray-700">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col items-center text-center mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-purple-400 mb-4 px-4">
        An Epic Quest for Destiny in the Hidden Realms of Deception and Betrayal: The Deck of Deception's Visual Novel Adventure, Where Every Turn of the Card Brings New Challenges, Twists, and Turns in a World Governed by Skill, Strategy, and Artificial Intelligence
      </h1>
      <p class="text-xl md:text-2xl text-gray-400 mb-6 font-japanese">
        欺瞞と裏切りの隠された領域での運命の壮大な探求: スキル、戦略、人工知能が支配する世界で、カードを回すたびに新たな挑戦、紆余曲折が起こる
      </p>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex space-x-6">
        <a href="#game" class="text-gray-300 hover:text-purple-400">Game</a>
        <a href="#collection" class="text-gray-300 hover:text-purple-400">Collection</a>
        <a href="#news" class="text-gray-300 hover:text-purple-400">News</a>
        <a href="#rules" class="text-gray-300 hover:text-purple-400">Rules</a>
      </div>
      <div class="flex space-x-4">
        <button
          on:click={connectWallet}
          class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
        >
          {$connected ? 'Connected' : 'Connect Wallet'}
        </button>
      </div>
    </div>
  </div>
</header>