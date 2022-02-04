import PostForm from './Components/PostForm'
import s from './App.module.css'

export default function App() {
  return (
    <div>
      <h2 className={s.title}>Reach out to us!</h2>
      <PostForm />
    </div>
  )
}
