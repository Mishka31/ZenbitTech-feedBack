import PostForm from './Components/PostForm/PostForm'
import Footer from './Components/Footer/Footer'
import s from './App.module.css'
import earth from './images/earth.png'
import sprite from './images/sprite.svg'

export default function App() {
  return (
    <>
      <PostForm />
      <div className={s.container}>
        <svg className={s.Cloud}>
          <use href={sprite + '#icon-Cloud'}></use>
        </svg>

        <svg className={s.cartoon5}>
          <use href={sprite + '#icon-red_cartoon-5'}></use>
        </svg>
        <div className={s.earthContainer}>
          <svg className={s.Ellipse31}>
            <use href={sprite + '#icon-Ellipse-31'}></use>
          </svg>
          <svg className={s.goodie1}>
            <use href={sprite + '#icon-goodie1'}></use>
          </svg>
          <svg className={s.Pink}>
            <use href={sprite + '#icon-red_cartoon-3'}></use>
          </svg>
          <img className={s.earth} src={earth} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}
