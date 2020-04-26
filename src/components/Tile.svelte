<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getTile } from "../caches";
  export let category;
  export let title;

  let showTile = false;
  let contents;

  const formatTitle = string => {
    const match = string.match(/`(?<code>\w+)`(?<rest>.*)/);
    if (!match) return string;
    return `<pre style="display: inline; margin: 0;">${match.groups.code}</pre>&nbsp;${match.groups.rest}`;
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
  }

  article > div {
    align-content: space-between;
    flex-direction: row;
  }

  article:last-child {
    border-bottom: 2px solid gray;
  }

  h4 {
    margin: 1vh 2vw;
    flex: 6;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .fill-button {
    flex: 1;
    justify-content: center;
    align-items: center;
    color: black;
  }

  section {
    flex-direction: column;
  }

  p {
    margin: 0;
    padding: 0 2vw;
    display: block;
  }

  .read-more {
    margin-top: 1vh;
    align-items: stretch;
    flex-direction: row;
  }

  .read-more a {
    padding: 1vh 0;
    background-color: lightgray;
  }

  .loading {
    margin-bottom: 1vh;
  }
</style>

<article>
  <div>
    <h4>
      {@html formatTitle(title)}
    </h4>
    <a
      class="fill-button"
      href="javascript:void 0"
      on:click={() => {
        showTile = !showTile;
        if (!contents) contents = getTile(category, title);
      }}>
      <strong>{showTile ? '-' : '+'}</strong>
    </a>
  </div>
  {#if showTile}
    {#await contents}
      <section>
        <p class="loading">Loading...</p>
      </section>
    {:then til}
      <section transition:slide={{ duration: 500 }}>
        <p>
          {@html til.content}
        </p>
        <div class="read-more">
          <a class="fill-button" href={til.url} target="_blank">
            Read on Github
          </a>
        </div>
      </section>
    {:catch}
      <section>
        <p>Couldn't load :(</p>
      </section>
    {/await}
  {/if}
</article>
