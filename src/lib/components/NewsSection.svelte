<script lang="ts">
  interface NewsItem {
    date: string;
    title: string;
    content: string;
    link?: string;
  }

  const newsItems: NewsItem[] = [
    {
      date: '2024-03-20',
      title: 'New Character Collection Launch',
      content: 'Introducing our latest character collection featuring legendary poker masters from different dimensions.',
      link: '#'
    },
    {
      date: '2024-03-15',
      title: 'Community Tournament Announcement',
      content: 'Join our monthly tournament to win exclusive narrative cards and compete for the grand prize.',
      link: '#'
    },
    {
      date: '2024-03-10',
      title: 'Partnership with OpenSea',
      content: 'Our collection is now officially listed on OpenSea with verified status.',
      link: 'https://opensea.io/collection/deck-of-deception'
    }
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