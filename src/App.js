import './App.css'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [adviceId, setAdviceId] = useState(0)
  const [adviceText, setAdviceText] = useState('')

  // effect to get a advice
  const getData = useCallback(async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const id = data['slip']['id']
    const advice = data['slip']['advice']
    setAdviceId(id)
    setAdviceText(advice)
  }, [])

  useEffect(
    function () {
      getData()
    },
    [getData]
  )

  return (
    <div className='App'>
      <div className='advice-card'>
        <p className='advice-id'>ADVICE #{adviceId}</p>
        <p className='advice-text'>"{adviceText}"</p>
        <div className='pattern-divider'></div>
        <div onClick={getData} className='new-button'></div>
      </div>
    </div>
  )
}

export default App
