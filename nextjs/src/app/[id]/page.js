"use client";

import { Gallery } from "@/app/components/Gallery";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import galleryData from "../data/gallery"
import styles from "../style.scss";
import { Button } from "@/app/components/Button";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function DetailPage () {

  // 現在のページのID取得
  const pathname = usePathname()
  const currentPageId = pathname.replace('/', '')

  // IDに紐づくデータを取得
  let currentPageData = null
  let currentPageCategory = null

  galleryData.categories.forEach(category => {
    const dataItem = category.data.find(dataItem => currentPageId === String(dataItem.id))
    if (dataItem) {
      currentPageData = dataItem
      currentPageCategory = category.categoryLabel
      return
    }
  })

  // クリックした画像をメインに表示
  const [mainImage, setMainImage] = useState(currentPageData.imgPath01)
  const handleChangeMainImage = (e) => {
    setMainImage(e.target.src)
  }

  return (
    <>
      <Header />

      <main className="p-detailPage">
        <section className="p-detailPageContents">
          <div className="p-detailPageContents__inner">
            <div className="p-detailPageContents__img">
              <img src={mainImage} alt="メイン画像" className="p-detailPageContents__imgMain" />
              <ul className="p-detailPageContents__imgList">
                {Object.keys(currentPageData).map((key, index) => {
                  if (key.startsWith('imgPath')) {
                    return (
                      <li key={index} className="p-detailPageContents__imgItem">
                        <img src={currentPageData[key]} alt="メイン画像" onClick={handleChangeMainImage} />
                      </li>
                    )
                  }
                  return null
                })}
              </ul>
            </div>
            <div className="p-detailPageContents__explain">
              <p className="p-detailPageContents__explainCategory">{currentPageCategory}</p>
              <h1 className="p-detailPageContents__explainName">{currentPageData.name}</h1>
              <p className="p-detailPageContents__explainText">{currentPageData.explanation}</p>
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