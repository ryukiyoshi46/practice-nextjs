import Link from "next/link"

export const Header = () => {
  return (
    <header className="l-header01">
      <div className="l-header01__inner">
        <div className="l-header01__logo">
          <img src="/img_logo01.svg" alt="堂平天文台ドーム デジタルミュージアム" className="l-header01__logoImg" />
        </div>
        <ul className="l-header01__menu">
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
            <Link href="/" className="l-header01__menuButton">
              ときがわ町<br />サイトTOPへ
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}