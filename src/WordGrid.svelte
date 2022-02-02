<script>
  import { scale } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  export let letters = []

  const rows = 6
  const columns = 5

  $: boxes = [
    ...letters,
    ...new Array(rows * columns - letters.length).fill({
      content: '',
      status: 'empty',
    }),
  ]

  const animDuration = 300
  const letterDelay = 300

  const flipTransition = (
    node,
    { delay = 0, easing = cubicOut, duration = 400 }
  ) => ({
    delay,
    easing,
    duration,
    css: (_t, u) => `
      transform: scale(1, ${1 - 1 * u});
    `,
  })
</script>

<div class="Grid">
  {#each boxes as box, i}
    <div class="ItemContainer">
      {#if box.status === 'guessing'}
        <div
          class="Item {box.status}"
          out:flipTransition={{ delay: letterDelay * (i % columns) }}
        >
          <div class="Letter">{box.content.toUpperCase()}</div>
        </div>
      {:else}
        <div
          class="Item {box.status}"
          in:flipTransition={{
            delay: animDuration + letterDelay * (i % columns),
          }}
        >
          <div class="Letter">{box.content.toUpperCase()}</div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .Grid {
    flex: 0 1 auto;
    display: grid;
    grid-template-columns: repeat(5, min(62px, 8vh));
    grid-auto-rows: min(62px, 8vh);
    column-gap: 5px;
    row-gap: 5px;
  }
  .ItemContainer {
    position: relative;
  }
  .Item {
    font-weight: bold;
    font-size: 2em;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
