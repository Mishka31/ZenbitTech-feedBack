import PostForm from './Components/PostForm/PostForm'
import Footer from './Components/Footer/Footer'
import s from './App.module.css'
import earth from './images/earth.png'

export default function App() {
  return (
    <>
      <div className={s.container}>
        <PostForm />
        <div className={s.earthContainer}>
          <img className={s.earth} src={earth} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}
