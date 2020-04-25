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
</style>

<h1>What I've learned:</h1>
{#await request}
  <p>Fetching TILs...</p>
{:then structure}
  {#each Object.keys(structure) as category}
    <section class="tile-category">
      <h2>{category}</h2>
      {#each structure[category] as title}
        <Tile {title} {category} />
      {/each}
    </section>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
