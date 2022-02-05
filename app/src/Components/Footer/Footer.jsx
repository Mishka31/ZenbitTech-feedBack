import s from './Footer.module.css'
import sprite from '../../images/sprite.svg'

const Footer = () => {
  return (
    <div className={s.container}>
      <svg className={s.Pink}>
        <use href={sprite + '#icon-Pink'}></use>
      </svg>
      <ul className={s.List}>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.linkedin.com/">
            <svg className={s.socialNetworkSvg}>
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://twitter.com/">
            <svg className={s.socialNetworkSvg}>
              <use href={sprite + '#icon-facebook'}></use>
            </svg>
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.facebook.com/">
            <svg className={s.socialNetworkSvg}>
              <use href={sprite + '#icon-twitter'}></use>
            </svg>
          </a>
        </li>
        <li className={s.itemOfList}>
          <a className={s.socialLink} href="https://www.pinterest.com/">
            <svg className={s.socialNetworkSvg}>
              <use href={sprite + '#icon-pinterest'}></use>
            </svg>
          </a>
        </li>
      </ul>
      <svg className={s.Group80}>
        <use href={sprite + '#icon-Group-80'}></use>
      </svg>
      <svg className={s.cartoon5}>
        <use href={sprite + '#icon-red_cartoon-5'}></use>
      </svg>
    </div>
  )
}
export default Footer
