import Link from "next/link"

export const ListHeader = () => {
  return (
    <header class="l-header02">
      <div class="l-header02__inner">
        <div class="l-header02__index">
          <img src="/img_logo01.png" alt="デジタルミュージアム" class="l-header02__logo" />
        </div>
        <ul class="l-header02__lang">
          <li class="l-header02__langItem">
            <Link to="/en" class="l-header02__langLink">
              堂平天文台ドーム
            </Link>
          </li>
          <li class="l-header02__langItem">
            <Link to="/" class="l-header02__langLink">
              ギャラリー
            </Link>
          </li>
        </ul>
        <ul class="l-header02__lang">
          <li class="l-header02__langItem">
            <Link to="/en" class="l-header02__langLink">
              EN
            </Link>
          </li>
          <li class="l-header02__langItem">
            <Link to="/" class="l-header02__langLink">
              JP
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}