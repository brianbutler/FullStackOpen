import { useState } from 'react'

const Statistics = (props) => {
  const total = () => {
    return props.good + props.neutral + props.bad
  }

  const average = () => {
    let tot = total()
    if(tot > 0)
    {
      return (props.good - props.bad) / tot
    }
    return 0
  }

  const positive = () => {
    let tot = total()
    if(tot > 0)
    {
      return props.good / tot
    }
    return 0
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total()}</p>
      <p>average {average()}</p>
      <p>positive {100*positive()}%</p>
    </div>
  )

}

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
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App