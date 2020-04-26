<script>
  import { get } from "svelte/store";
  import Tile from "./Tile.svelte";
  import { getStructure } from "../caches";
  const request = getStructure();
</script>

<style>
  h1 {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    .mobile-warning {
      display: none;
    }
  }
</style>

<h1>What I've learned:</h1>
<p>
  A collection of concise write-ups on small things I learn day to day across a
  variety of languages and technologies.
</p>
<small class="mobile-warning">
  The code snippets may look terrible on mobile.
</small>
{#await request}
  <p>Fetching TILs...</p>
{:then structure}
  {#each Object.keys(structure) as category}
    <section>
      <h2>{category}</h2>
      {#each structure[category] as title}
        <Tile {title} {category} />
      {/each}
    </section>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
