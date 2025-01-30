<script lang="ts">
  const rules = {
    overview: "The Deck of Deception combines poker strategy with visual novel storytelling, where your decisions shape the narrative and mint unique NFTs.",
    gameplay: [
      "Play poker solitaire to earn game currency.",
      "Spend currency to buy story cards that shape the plot.",
      "Combine story cards to create unique plot twists.",
      // "Win special hands to mint rare narrative cards",
      // "Combine cards to create unique story arcs"
    ],
    nftTypes: {
      stories: "Complete story arcs become Story NFTs, each unique based on your choices",
      characters: "Character NFTs evolve based on poker performance and narrative decisions",
      cards: "Narrative Cards represent key moments, special hands, and plot twists"
    },
    rarity: "Rarity is determined by hand difficulty, decision complexity, and story uniqueness"
  };
</script>

<section id="rules" class="bg-gray-800 rounded-lg p-6">
  <h2 class="text-2xl font-bold mb-6 text-purple-400">Game Rules & Mechanics</h2>
  
  <div class="space-y-6">
    <div>
      <h3 class="text-xl font-semibold mb-3">Overview</h3>
      <p class="text-gray-300">{rules.overview}</p>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-3">Gameplay</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2">
        {#each rules.gameplay as rule}
          <li>{rule}</li>
        {/each}
      </ul>
    </div>

    <!-- <div>
      <h3 class="text-xl font-semibold mb-3">NFT Types</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-gray-700 p-4 rounded">
          <h4 class="font-semibold mb-2 text-purple-400">Stories</h4>
          <p class="text-gray-300">{rules.nftTypes.stories}</p>
        </div>
        <div class="bg-gray-700 p-4 rounded">
          <h4 class="font-semibold mb-2 text-purple-400">Characters</h4>
          <p class="text-gray-300">{rules.nftTypes.characters}</p>
        </div>
        <div class="bg-gray-700 p-4 rounded">
          <h4 class="font-semibold mb-2 text-purple-400">Narrative Cards</h4>
          <p class="text-gray-300">{rules.nftTypes.cards}</p>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-3">Rarity System</h3>
      <p class="text-gray-300">{rules.rarity}</p>
    </div>
  </div> -->
</section>