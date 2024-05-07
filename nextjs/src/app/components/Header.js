import Link from "next/link"
import { useState } from "react"

export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleClickOpenButton = () => {
    if(!openMenu) {
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  }

  return (
    <header className="l-header01">

      <div className="l-header01__inner">

        <div className="l-header01__logo">
          <Link href="/" className="l-header01__logoLink">
            <img src="/img_logo01.svg" alt="堂平天文台ドーム デジタルミュージアム" className="l-header01__logoImg" />
          </Link>
        </div>

        <button className={`l-header01__button ${openMenu ? 'is-active' : ''}` } onClick={handleClickOpenButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`l-header01__menu ${openMenu ? 'is-active' : ''}`}>
          <ul className="l-header01__menuList">
            <li className="l-header01__menuItem">
              <Link href="" className="l-header01__menuLink">
                堂平天文台ドーム
              </Link>
            </li>
            <li className="l-header01__menuItem">
              <Link href="/" className="l-header01__menuLink">
                ギャラリー
              </Link>
            </li>
            <li className="l-header01__menuItem">
              <Link href="https://www.town.tokigawa.lg.jp/" target="_blank" className="l-header01__menuButton">
                ときがわ町<br className="pc-only" />サイトTOPへ
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )
}