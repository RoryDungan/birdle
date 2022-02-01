<script>
  import WorldGrid from './WordGrid.svelte'

  const answer = 'goose'
  const wordList = [
    'eagle',
    'chook',
    'goose',
    'booby',
    'stork',
    'drake',
    'finch',
    'swift',
    'heron',
    'robin',
    'raven',
    'doves',
    'ducks',
    'crows',
    'wrens',
    'hawks',
    'larks',
    'terns',
    'gulls',
    'serin',
    'grebe',
    'owlet',
    'pipit',
    'pitta',
    'snipe',
    'hobby',
    'crake',
  ]
  const guesses = []
  $: guessedLetters = new Set(guesses.join('').split(''))

  const testContent = [
    { content: 'e', status: 'correct' },
    { content: 'a', status: 'incorrect' },
    { content: 'g', status: 'misplaced' },
    { content: 'l', status: 'incorrect' },
    { content: 'e', status: 'incorrect' },
    { content: 'a', status: 'guessing' },
    { content: 's', status: 'guessing' },
    { content: 'd', status: 'guessing' },
    { content: 'f', status: 'guessing' },
    { content: '', status: 'guessing' },
  ]
</script>

<main>
  <h1>Birdle</h1>
  <p>Guess the 5 letter bird</p>
  <div class="Game">
    <WorldGrid letters={testContent} />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .Game {
    display: flex;
    justify-content: center;
  }
</style>
