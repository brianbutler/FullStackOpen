import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGoodValue = (value) => () => {
    console.log('good: ', value)
    setGood(value + 1)
  }

  const incNeutralValue = (value) => () => {
    console.log('neutral: ', value)
    setNeutral(value + 1)
  }

  const incBadValue = (value) => () => {
    console.log('bad: ', value)
    setBad(value + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={incGoodValue(good)}>good</button>
      <button onClick={incNeutralValue(neutral)}>neutral</button>
      <button onClick={incBadValue(bad)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App