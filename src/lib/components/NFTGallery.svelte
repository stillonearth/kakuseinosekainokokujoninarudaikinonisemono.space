<script lang="ts">
  export let visible;
  import type { Story, Character, NarrativeCard } from "../types/NFT";

  export let stories: Story[] = [];
  export let characters: Character[] = [];
  export let narrativeCards: NarrativeCard[] = [];

  let activeTab: "stories" | "characters" | "cards" = "stories";
</script>

{#if visible}
  <section id="collection" class="bg-gray-800 rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-bold mb-6 text-purple-400">Your NFT Collection</h2>

    <div class="w-full max-w-6xl mx-auto p-4">
      <div class="flex space-x-4 mb-6">
        <button
          class="px-4 py-2 rounded {activeTab === 'stories'
            ? 'bg-purple-600'
            : 'bg-gray-700'}"
          on:click={() => (activeTab = "stories")}
        >
          Stories
        </button>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#if activeTab === "stories"}
          {#each stories as story}
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={story.imageUrl}
                alt={story.title}
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">{story.title}</h3>
                <p class="text-gray-400">{story.description}</p>
              </div>
            </div>
          {/each}
        {:else if activeTab === "characters"}
          {#each characters as character}
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={character.imageUrl}
                alt={character.name}
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">{character.name}</h3>
                <div class="flex flex-wrap gap-2 mt-2">
                  {#each character.traits as trait}
                    <span class="bg-purple-600 px-2 py-1 rounded-full text-sm"
                      >{trait}</span
                    >
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        {:else}
          {#each narrativeCards as card}
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={card.imageUrl}
                alt={card.type}
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <span class="bg-purple-600 px-2 py-1 rounded-full text-sm"
                  >{card.type}</span
                >
                <p class="mt-2">{card.content}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
