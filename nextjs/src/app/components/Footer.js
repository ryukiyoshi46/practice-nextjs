import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="l-footer01">
      <div className="l-footer01__inner">
        <Link href="/">
          <img src="/img_logo02.svg" alt="堂平天文台ドーム デジタルミュージアム" className="l-footer01__logo" />
        </Link>
      </div>
    </footer>
  )
}