<script>
  export let letters = []

  const rows = 6
  const columns = 5

  $: boxes = [
    ...letters,
    ...Array(rows * columns - letters.length).fill({
      content: '',
      status: 'empty',
    }),
  ]
</script>

<div class="Grid">
  {#each boxes as box, i}
    <div class="Item {box.status}">
      <div class="Letter">{box.content.toUpperCase()}</div>
    </div>
  {/each}
</div>

<style>
  .Grid {
    flex: 0 1 auto;
    display: grid;
    grid-template-columns: repeat(5, 62px);
    grid-auto-rows: 62px;
    column-gap: 5px;
    row-gap: 5px;
  }
  .Item {
    font-weight: bold;
    font-size: 2em;
    display: flex;
    align-items: center;
  }

  .empty {
    border: 2px solid #d3d6da;
  }

  .guessing {
    border: 2px solid #878a8c;
  }

  .correct {
    background-color: rgb(106, 170, 100);
    color: white;
  }

  .incorrect {
    background-color: rgb(120, 124, 126);
    color: white;
  }
  .misplaced {
    background-color: rgb(201, 180, 88);
    color: white;
  }

  .Letter {
    flex: 1 1 auto;
  }
</style>
