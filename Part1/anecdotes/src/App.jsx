import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const lenAnecdotes = anecdotes.length

  const [selected, setSelected] = useState({index:0, votes:new Array(lenAnecdotes).fill(0)})

  function randomInteger(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + Math.floor(min);
  }

  const nextSelected = () => () => {
    let next = randomInteger(0, lenAnecdotes)
    console.log("Next: ", next)
    setSelected({index:next, votes:{...selected.votes}})
  }

  const voteSelected = () => () => {
    let newState = {index:selected.index, votes:{...selected.votes}}
    newState.votes[selected.index] += 1
    setSelected(newState)
  }

  return (
    <div>
      <p>{anecdotes[selected.index]}</p>
      <p>has {selected.votes[selected.index]} votes</p>
      <button onClick={voteSelected()}>vote</button>
      <button onClick={nextSelected()}>next anecdote</button>
    </div>
  )
}

export default App