<script lang="ts">
  const marketplaces = [
    {
      name: 'OpenSea',
      url: 'https://opensea.io/collection/deck-of-deception',
      icon: '🌊'
    },
    {
      name: 'Rarible',
      url: 'https://rarible.com/deck-of-deception',
      icon: '🎭'
    },
    {
      name: 'LooksRare',
      url: 'https://looksrare.org/collections/deck-of-deception',
      icon: '💎'
    }
  ];
</script>
<!-- 
<section class="bg-gray-800 rounded-lg p-6 mb-8">
  <h2 class="text-2xl font-bold mb-6 text-purple-400">NFT Marketplaces</h2>
  <div class="grid md:grid-cols-3 gap-4">
    {#each marketplaces as marketplace}
      <a
        href={marketplace.url}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
      >
        <span class="text-2xl mr-2">{marketplace.icon}</span>
        <span class="font-semibold">{marketplace.name}</span>
      </a>
    {/each}
  </div>
</section> -->