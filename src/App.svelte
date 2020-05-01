<script>
  import Header from "./components/Header.svelte";
  import TileList from "./components/TileList.svelte";
  import { section } from "./stores";

  const pages = ["About", "TIL"];
</script>

<style>
  main div {
    margin: 2vh 5vw;
    max-width: 860px;
  }

  @media (min-width: 860px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    main div {
      padding: 2vh 0;
      width: 860px;
    }
  }
</style>

<Header {pages} />
<main>
  <div>
    {#if $section === 'About'}
      <div>Howdy</div>
    {:else if $section === 'TIL'}
      <TileList />
    {/if}
  </div>
</main>
