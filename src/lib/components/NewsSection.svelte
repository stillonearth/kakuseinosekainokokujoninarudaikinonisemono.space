<script lang="ts">
  interface NewsItem {
    date: string;
    title: string;
    content: string;
    link?: string;
  }

  const newsItems: NewsItem[] = [
    {
      date: '2025-01-30',
      title: 'WASM version port of GameOff2024 Jam version lanuch',
      content: 'Introducing lanuch of browser version of GameOff2024 Jam version of Deck of Deception. Play in browser and shape your destity, just remember that once you go bankrup you die. Just kidding! Or not?!',
      // link: '#'
    },
    {
      date: '2025-02-08',
      title: 'Updated version of GameOff2024 Jam version lanuch',
      content: 'Some of the bugs are fixed.',
      // link: '#'
    },
  ];
</script>

<section id="news" class="bg-gray-800 rounded-lg p-6 mb-8">
  <h2 class="text-2xl font-bold mb-6 text-purple-400">Latest News</h2>
  <div class="space-y-6">
    {#each newsItems as item}
      <div class="border-l-4 border-purple-600 pl-4">
        <div class="text-sm text-gray-400">{item.date}</div>
        <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
        <p class="text-gray-300 mb-2">{item.content}</p>
        {#if item.link}
          <a href={item.link} class="text-purple-400 hover:text-purple-300">Read more →</a>
        {/if}
      </div>
    {/each}
  </div>
</section>