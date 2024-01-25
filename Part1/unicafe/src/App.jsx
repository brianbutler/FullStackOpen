import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

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

  if(total() == 0)
  {
    return (
      <div>
        <h1>statistics</h1>
        <p>no statistics gives</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={props.good}></StatisticsLine>
      <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
      <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
      <StatisticsLine text="all" value={total()}></StatisticsLine>
      <StatisticsLine text="average" value={average()}></StatisticsLine>
      <StatisticsLine text="positive" value={100*positive() + "%"}></StatisticsLine>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGoodValue = () => () => {
    console.log('good: ', good)
    setGood(good + 1)
  }

  const incNeutralValue = () => () => {
    console.log('neutral: ', neutral)
    setNeutral(neutral + 1)
  }

  const incBadValue = () => () => {
    console.log('bad: ', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={incGoodValue()}></Button>
      <Button text="neutral" handleClick={incNeutralValue()}></Button>
      <Button text="bad" handleClick={incBadValue()}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App