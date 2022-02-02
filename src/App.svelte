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

  $: foundLetters = new Map(
    guesses
      .flat()
      .map((g) => [g.content, g.status])
      // In order to trim to only one entry per letter, first sort guesses by letter
      // and then combine adjacent entries of the same letter
      .sort((a, b) => {
        if (a < b) {
          return -1
        }
        if (a > b) {
          return 1
        }
        return 0
      })
      .reduce((acc, curr) => {
        if (acc.length <= 0) {
          return [curr]
        }
        // When combining, if one entry is 'correct' and the other is 'misplaced',
        // the result should be 'correct'
        const lastItem = acc[acc.length - 1]
        if (lastItem[0] === curr[0]) {
          const newItem = [
            curr[0],
            curr[1] === 'correct' || lastItem[1] === 'correct'
              ? 'correct'
              : curr[1],
          ]
          return [...acc.slice(0, acc.length - 1), newItem]
        }
        return [...acc, curr]
      }, [])
  )

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
      setTimeout(() => alert('You guessed the bird!'), 2000)
      return
    }

    if (guesses.length >= maxGuesses) {
      setTimeout(() => alert(`The bird was ${answer}`), 2000)
    }
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
  <!-- <h1>Birdle</h1> -->
  <p>Guess the 5 letter bird</p>
  <div class="GridContainer">
    <WorldGrid letters={content} />
  </div>
  <OnScreenKeyboard
    keyPressed={addLetter}
    enterPressed={makeGuess}
    backspacePressed={removeLetter}
    {foundLetters}
  />
</main>

<style>
  main {
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    position: absolute;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .GridContainer {
    display: flex;
    flex: 1 2 100px;
    align-items: center;
    flex-direction: row;
  }
</style>
