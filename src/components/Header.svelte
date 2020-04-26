<script>
  import { section } from "../stores";
  export let pages;
</script>

<style>
  * {
    display: flex;
    color: #dddddd;
  }

  header {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #222222;
    align-items: stretch;
    flex-direction: row;
  }

  ul {
    margin: 0;
    height: 100%;
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .nice-padding {
    padding: 2vh 4vw;
  }
</style>

<header>
  <div class="nice-padding">Welcome!</div>
  <nav>
    <ul>
      {#each pages as page}
        <li>
          <a
            class="nice-padding"
            href="javascript:void 0"
            on:click={() => section.set(page)}>
            {page}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
