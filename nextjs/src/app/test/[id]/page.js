import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function DetailPage () {
  return (
    <>
      <Header />

      <main className="p-detailPage">
        <section className="">
          <div className="">
            <div className="">
              <img src="/img_mv01.jpg" alt="メイン画像" className="" />
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="">
              <p>category name</p>
              <h1>product name</h1>
              <p>explanation</p>
            </div>
          </div>
        </section>

        <section className="">
          <h2>その他の装置を見る</h2>
        </section>
      </main>

      <Footer />
    </>
  )
}