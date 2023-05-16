import './App.css'
import {userState} from 'react'

function App() {
  const [count, setCount] = userState()
  return (
      <div className="app">
      <h1> Say hello to ReactJS</h1>
      </div>
  )
}

export default App;