import s from './Footer.module.css'
import sprite from '../../images/sprite.svg'

const Footer = () => {
  return (
    <div className={s.container}>
      {/* <div className={s.containerSvg}> */}
      <svg className={s.Pink}>
        <use href={sprite + '#icon-Pink'}></use>
      </svg>
      {/* </div> */}
      <ul className={s.List}>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.linkedin.com/">
            in
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://twitter.com/">
            tw
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.facebook.com/">
            fb
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.pinterest.com/">
            pe
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
