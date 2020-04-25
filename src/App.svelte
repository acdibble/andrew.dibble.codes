<script>
  import Header from "./components/Header.svelte";
  import TileList from "./components/TileList.svelte";
  import { section } from "./stores";

  const pages = ["About", "TIL"];
</script>

<style>
  main {
    align-self: center;
    padding: 2vh 5vw;
    max-width: 860px;
  }
</style>

<Header {pages} />
<main>
  {#if $section === 'About'}
    <div>Howdy</div>
  {:else if $section === 'TIL'}
    <TileList />
  {/if}
</main>
