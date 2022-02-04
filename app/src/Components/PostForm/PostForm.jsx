import { useState } from 'react'
import s from './PostForm.module.css'
import { add_FeedBack } from '../../services/api'

const PostForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const hendkeSubmit = (e) => {
    e.preventDefault()
    const newFeedBack = { name: name, email: email, content: message }

    if (name || email || message) {
      try {
        add_FeedBack(newFeedBack)
        alert('✔ Successful sending feedback')
      } catch (error) {
        console.error(error.message)
      }
      reset()
      return
    }
    alert('❌ All fields must be filled')
  }

  const handleChange = (event) => {
    const { name: inputName, value } = event.target

    if (inputName === 'name') {
      setName(value)
    } else if (inputName === 'email') {
      setEmail(value)
    } else if (inputName === 'message') {
      setMessage(value)
    }
  }
  const reset = () => {
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <>
      <form className={s.form} onSubmit={hendkeSubmit}>
        <h2 className={s.title}>Reach out to us!</h2>
        <input
          className={s.inputName}
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Your name*"
          name="name"
        />
        <input
          className={s.inputEmail}
          type="text"
          onChange={handleChange}
          placeholder="Your e-mail*"
          name="email"
          value={email}
        />
        <input
          className={s.inputMessage}
          type="text"
          onChange={handleChange}
          name="message"
          placeholder="Your message*"
          value={message}
        />
        <button className={s.button} type="submit">
          Send message
        </button>
      </form>
    </>
  )
}

export default PostForm
