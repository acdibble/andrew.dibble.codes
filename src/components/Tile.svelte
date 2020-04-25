<script>
  import { getTile } from "../caches";
  export let category;
  export let title;

  let showTile = false;
  let contents;

  const formatTitle = string => {
    const match = string.match(/`(?<code>\w+)`(?<rest>.*)/);
    if (!match) return string;
    return `<code class="title-code">${match.groups.code}</code>&nbsp${match.groups.rest}`;
  };
</script>

<style>
  * {
    display: flex;
  }

  article {
    align-content: space-between;
    border: 2px solid gray;
    border-bottom: 0;
    flex-direction: column;
    padding-left: 2vw;
  }

  article > div {
    align-content: space-between;
    flex-direction: row;
  }

  article:last-child {
    border-bottom: 2px solid gray;
  }

  h4 {
    margin: 1vh 0;
    flex: 6;
    align-items: center;
  }

  a {
    flex: 1;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: black;
  }
</style>

<article>
  <div>
    <h4>
      {@html formatTitle(title)}
    </h4>
    <a
      href="javascript:void 0"
      on:click={() => {
        showTile = !showTile;
        if (!contents) contents = getTile(category, title);
      }}>
      <strong>+</strong>
    </a>
  </div>
  {#if showTile}
    <p>
      {#await contents}
        Loading...
      {:then til}
        {til}
      {:catch}
        Couldn't load :(
      {/await}
    </p>
  {/if}
</article>
