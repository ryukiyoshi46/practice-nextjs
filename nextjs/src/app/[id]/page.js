"use client";

import { Gallery } from "@/app/components/Gallery";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import galleryData from "../data/gallery"
import styles from "../style.scss";
import { Button } from "@/app/components/Button";

export default function DetailPage () {
  console.log(galleryData)

  return (
    <>
      <Header />

      <main className="p-detailPage">
        <section className="p-detailPageContents">
          <div className="p-detailPageContents__inner">
            <div className="p-detailPageContents__img">
              <img src="/img_dummy01.png" alt="メイン画像" className="p-detailPageContents__imgMain" />
              <ul className="p-detailPageContents__imgList">
                <li className="p-detailPageContents__imgItem"><img src="/img_dummy01.png" alt="メイン画像" className="" /></li>
                <li className="p-detailPageContents__imgItem"><img src="/img_dummy01.png" alt="メイン画像" className="" /></li>
                <li className="p-detailPageContents__imgItem"><img src="/img_dummy01.png" alt="メイン画像" className="" /></li>
                <li className="p-detailPageContents__imgItem"><img src="/img_dummy01.png" alt="メイン画像" className="" /></li>
              </ul>
            </div>
            <div className="p-detailPageContents__explain">
              <p className="p-detailPageContents__explainCategory">観測装置1</p>
              <h1 className="p-detailPageContents__explainName">91cm反射望遠鏡</h1>
              <p className="p-detailPageContents__explainText">
                仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります<br />
                仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります仮のテキストが入ります
              </p>
            </div>
          </div>
        </section>

        <section className="l-gallery" style={{zIndex: '10'}}>
          <div className="l-gallery__inner">
            <h2 className="l-gallery__index">その他の装置を見る</h2>
            <Gallery />
          </div>
        </section>

        <section className="l-buttonArea">
          <Button hrefURL={"/"} addClasses={"l-buttonArea__link"}>TOPへ戻る</Button>
        </section>

      </main>

      <Footer />
    </>
  )
}