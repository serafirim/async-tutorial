import React, { lazy, Suspense, useReducer, useState } from 'react'
import './App.css'
const RiverInformation = lazy(() => import(/* webpackChunkName: "RiverInformation" */ './RiverInformation/RiverInformation')) // Replaced "import RiverInformation from './RiverInformation/RiverInformation'"

function App() {
  // Create a stateful variable and function to hold the selected river with the useState Hook
  const [ river, setRiver ] = useState('nile')
  const [ show, toggle ] = useReducer(state => !state, true)

  return (
    <>
      <div className="wrapper">
        <h1>World's Longest Rivers</h1>
        
        <div><button onClick={toggle}>Toggle Details</button></div>
        <button onClick={() => setRiver('amazon')}>Amazon</button>
        <button onClick={() => setRiver('mississippi')}>Mississippi</button>
        <button onClick={() => setRiver('nile')}>Nile</button>
        <button onClick={() => setRiver('yangtze')}>Yangtze</button>
        <Suspense fallback={<div>Loading Component...</div>}>
          {show && <RiverInformation name={river}/>}
        </Suspense>
      </div>
    </>
  )
}

export default App
