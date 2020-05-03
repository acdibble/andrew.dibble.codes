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
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    background-color: #222222;
  }

  .container {
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 860px;
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
    padding: 2vh 25px;
  }

  @media (min-width: 860px) {
    .container {
      margin: 0 4vw;
      min-width: 860px;
    }

    header {
      align-items: center;
    }

    div.nice-padding {
      padding-left: 0;
    }

    li:last-child a.nice-padding {
      padding-right: 0;
    }
  }
</style>

<header>
  <div class="container">
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
  </div>
</header>
