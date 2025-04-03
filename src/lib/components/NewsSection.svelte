<script lang="ts">
  export let visible;

  interface NewsItem {
    date: string;
    title: string;
    content: string;
    link?: string;
  }

  const newsItems: NewsItem[] = [
    {
      date: "2025-01-30",
      title: "WASM Version Release: GameOff2024 Jam Edition Now in the Browser",
      content:
        "We’re excited to announce the official launch of the browser-based version of the GameOff2024 Jam edition of *Deck of Deception*. Play directly in your web browser and shape your destiny—just remember, once you go bankrupt, it's game over! Well, maybe... or maybe not?! Either way, the adventure awaits.",
    },
    {
      date: "2025-02-08",
      title: "Updated Version of GameOff2024 Jam Edition Released",
      content:
        "We’ve released an updated version of the GameOff2024 Jam edition to address and fix some bugs. We’re committed to ensuring a smooth and enjoyable experience for all players.",
    },
    {
      date: "2025-03-07",
      title: "Monthly Update: New Features and Enhancements",
      content:
        "This month’s update brings significant improvements, including the addition of a main menu, in-game menus, and various effects. Stay tuned for more exciting updates coming soon!",
    },
    {
      date: "2025-03-16",
      title: "Initial Soneium Blockchain Support Added",
      content:
        "We’re thrilled to announce initial support for the Soneum blockchain in *Deck of Deception*. Stories are now being saved directly to the blockchain. Currently available on the testnet while the game remains in active development.",
    },
  ];
</script>

{#if visible}
  <section id="news" class="bg-gray-800 rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-bold mb-6 text-purple-400">Latest News</h2>
    <div class="space-y-6">
      {#each newsItems.reverse() as item}
        <div class="border-l-4 border-purple-600 pl-4">
          <div class="text-sm text-gray-400">{item.date}</div>
          <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
          <p class="text-gray-300 mb-2">{item.content}</p>
          {#if item.link}
            <a href={item.link} class="text-purple-400 hover:text-purple-300"
              >Read more →</a
            >
          {/if}
        </div>
      {/each}
    </div>
  </section>
{/if}
