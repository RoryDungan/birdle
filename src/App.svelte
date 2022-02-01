<script>
  import WorldGrid from './WordGrid.svelte'
  import OnScreenKeyboard from './OnScreenKeyboard.svelte'

  const answer = 'goose'
  const birdList = [
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
    'swans',
    'grebe',
    'owlet',
    'pipit',
    'pitta',
    'snipe',
    'hobby',
    'crake',
    'galah',
    'miner',
    'egret',
  ]
  let guesses = []

  let current = ''

  const wordLength = 5
  const maxGuesses = 6

  $: content = [
    ...guesses.flat(),
    ...(guesses.length < maxGuesses
      ? current.split('').map((c) => ({ content: c, status: 'guessing' }))
      : []),
    ...(guesses.length < maxGuesses
      ? Array(wordLength - current.length).fill({
          content: '',
          status: 'guessing',
        })
      : []),
  ]

  $: foundLetters = new Map(guesses.flat().map((g) => [g.content, g.status]))

  const addLetter = (letter) => {
    current = current + letter.toLowerCase()
  }

  const removeLetter = () => {
    current = current.slice(0, current.length - 1)
  }

  const makeGuess = () => {
    if (current.length < wordLength) {
      alert('Not enough letters!')
      return
    }

    if (birdList.indexOf(current) < 0) {
      alert('Not a bird!')
      return
    }

    const result = current.split('').map((c, i) => ({
      content: c,
      status:
        answer[i] === c
          ? 'correct'
          : answer.indexOf(c) >= 0
          ? 'misplaced'
          : 'incorrect',
    }))

    guesses = [...guesses, result]

    current = ''

    if (result.reduce((acc, curr) => acc && curr.status === 'correct')) {
      setTimeout(() => alert('You guessed the bird!'), 1000)
      return
    }

    if (guesses.length >= maxGuesses) {
      setTimeout(() => alert(`The bird was ${answer}`), 1000)
    }

    console.log('found letters: ')
    console.log(foundLetters)
    console.log('guesses:')
    console.log(guesses)
  }

  const handleKeydown = (evt) => {
    if (/^[a-z]$/i.test(evt.key) && current.length < wordLength) {
      addLetter(evt.key)
    } else if (evt.key === 'Backspace') {
      removeLetter()
    } else if (evt.key === 'Enter') {
      makeGuess()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <p>Guess the 5 letter bird</p>
  <div class="Game">
    <WorldGrid letters={content} />
    <OnScreenKeyboard
      keyPressed={addLetter}
      enterPressed={makeGuess}
      backspacePressed={removeLetter}
      {foundLetters}
    />
  </div>
</main>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .Game {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
