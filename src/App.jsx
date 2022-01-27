import { useState } from 'react'
import './App.css'
const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const hendkeSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.dir(e.target.value)
    // reset()
  }
  const handleChange = (event) => {
    console.log(event.target.value)
    const { name: inputName, value } = event.target

    if (inputName === 'nickname') {
      setNickname(value)
    } else if (inputName === 'real_name') {
      setReal_name(value)
    } else if (inputName === 'origin_description') {
      setOrigin_description(value)

  }

  return (
    <div>
      <h2>Reach out to us!</h2>
      <form className="form" onSubmit={hendkeSubmit}>
        <input
          type="text"
          className="imput"
          onChange={handleChange}
          // value={nickname}
          name="nickname"
          placeholder=" required"
          required
        />
        <input type="text" className="imput" />
        <input type="text" className="imput" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
