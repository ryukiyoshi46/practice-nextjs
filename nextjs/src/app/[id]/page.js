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

  const [mainImage, setMainImage] = useState(currentPageData.imgPath01)
  const handleChangeMainImage = (e) => {
    console.log(e);
    console.log(e.target.src);
    setMainImage(e.target.src)
    console.log('click')
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
                { currentPageData.imgPath01 && (
                  <li className="p-detailPageContents__imgItem"><img src={`${currentPageData.imgPath01}`} alt="メイン画像" className="" onClick={handleChangeMainImage} /></li>
                )}
                { currentPageData.imgPath02 && (
                  <li className="p-detailPageContents__imgItem"><img src={`${currentPageData.imgPath02}`} alt="メイン画像" className="" onClick={handleChangeMainImage} /></li>
                )}
                { currentPageData.imgPath03 && (
                  <li className="p-detailPageContents__imgItem"><img src={`${currentPageData.imgPath03}`} alt="メイン画像" className="" onClick={handleChangeMainImage} /></li>
                )}
                { currentPageData.imgPath04 && (
                  <li className="p-detailPageContents__imgItem"><img src={`${currentPageData.imgPath04}`} alt="メイン画像" className="" onClick={handleChangeMainImage} /></li>
                )}
                { currentPageData.imgPath05 && (
                  <li className="p-detailPageContents__imgItem"><img src={`${currentPageData.imgPath05}`} alt="メイン画像" className="" onClick={handleChangeMainImage} /></li>
                )}
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