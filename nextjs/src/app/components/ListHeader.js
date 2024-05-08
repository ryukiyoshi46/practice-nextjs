import Link from "next/link"

export const ListHeader = () => {
  return (
    <header className="l-header02">
      <div className="l-header02__inner">
        <div className="l-header02__index">
          <img src="/img_logo01.png" alt="デジタルミュージアム" className="l-header02__logo" />
        </div>
        <ul className="l-header02__lang">
          <li className="l-header02__langItem">
            <Link to="/en" className="l-header02__langLink">
              堂平天文台ドーム
            </Link>
          </li>
          <li className="l-header02__langItem">
            <Link to="/" className="l-header02__langLink">
              ギャラリー
            </Link>
          </li>
        </ul>
        <ul className="l-header02__lang">
          <li className="l-header02__langItem">
            <Link to="/en" className="l-header02__langLink">
              EN
            </Link>
          </li>
          <li className="l-header02__langItem">
            <Link to="/" className="l-header02__langLink">
              JP
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}