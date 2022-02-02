<script>
  export let keyPressed, enterPressed, backspacePressed
  export let foundLetters = new Map()

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
    <div class="spacer" />
    {#each 'asdfghjkl'.split('') as l}
      <button on:click={keyPressed(l)} class={'key ' + letterClass(l)}
        >{l.toUpperCase()}</button
      >
    {/each}
    <div class="spacer" />
  </div>
  <div class="row">
    <button on:click={enterPressed()} class="key untried enter">ENTER</button>
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
    flex: 1;
    margin: 2px;
    border: 0;
    font-weight: bold;
    height: 58px;
    width: min(8vw, 43px);
    border-radius: 4px;
  }

  .enter {
    width: min(16vw, 64px);
  }

  .spacer {
    width: min(4vw, 21px);
  }

  .row {
    display: flex;
  }

  /*
  .keyboard {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  } */
</style>
