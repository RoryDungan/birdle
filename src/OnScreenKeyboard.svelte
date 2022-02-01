<script>
  export let keyPressed, enterPressed, backspacePressed
  export let foundLetters = {}

  $: letterClass = (letter) => foundLetters.get(letter) || 'untried'
</script>

<div class="keyboard">
  <div class="row">
    {#each 'qwertyuiop'.split('') as l}
      <button on:click={keyPressed(l)} class={'key ' + letterClass(l)}
        >{l.toUpperCase()}</button
      >
    {/each}
  </div>
  <div class="row">
    {#each 'asdfghjkl'.split('') as l}
      <button on:click={keyPressed(l)} class={'key ' + letterClass(l)}
        >{l.toUpperCase()}</button
      >
    {/each}
  </div>
  <div class="row">
    <button on:click={enterPressed()} class="key untried">ENTER</button>
    {#each 'zxcvbnm'.split('') as l}
      <button on:click={keyPressed(l)} class={'key ' + letterClass(l)}
        >{l.toUpperCase()}</button
      >
    {/each}
    <button on:click={backspacePressed()} class="key untried">⌫</button>
  </div>
</div>

<style>
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

  .untried {
    background-color: rgb(211, 214, 218);
  }

  .key {
    /* display: flex; */
    flex: 1;
    margin: 2px;
    border: 0;
    font-weight: bold;
    height: 58px;
    border-radius: 4px;
  }

  /* .row {
    display: flex;
    width: 100%;
  }

  .keyboard {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  } */
</style>
