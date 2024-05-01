"use client";

import styles from "./style.scss";

import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Button } from "./components/Button";
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from "next/link";

export default function TestPage() {
  const [isIframeOpacityActive, setIsIframeOpacityActive] = useState(false);
  const [bodyNoScroll, setBodyNoScroll] = useState(false);
  const [isDisplayBackground01, setIsDisplayBackground01] = useState(false);
  const [isDisplayBackground02, setIsDisplayBackground02] = useState(false);
  const [idDisplayBackToTopButton, setIdDisplayBackToTopButton] = useState(false);
  const [galleryZIndex, setGalleryZIndex] = useState(10);
  const [matterPortModalOpen, setMatterPortModalOpen] = useState(false)

  // ページ遷移するパターン
  // const handleMoveToMatterPort = () => {
  //   setIsDisplayBackground01(true);
  //   setBodyNoScroll(true);
  //   setTimeout(() => {
  //     window.location.href = "https://my.matterport.com/show/?m=JVuiBtyUPoW&qs=1"
  //   }, 3000)
  // }

  const handleOpenMatterPort = () => {
    setIsDisplayBackground02(true);
    setBodyNoScroll(true);
    setTimeout(() => {
      // setIsIframeOpacityActive(true);
      setIsDisplayBackground02(false);
      setIdDisplayBackToTopButton(true);
      setMatterPortModalOpen(true)
      // setGalleryZIndex(-1);
    }, 3000);
  };

  useEffect(() => {
    if (bodyNoScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [bodyNoScroll]);

  const handleReloadPage = () => {
    console.log('reload');
    window.location.href = "/";
    setIdDisplayBackToTopButton(false);
  };

  return (
    <>
      <Header />

      <div className="p-top__bg">

        <section className="l-mv">
          <div className="l-mv__wrap">
            <picture>
              <source media="(max-width: 1023px)" srcSet="/img_mv02.jpg" className="l-mv__bg" />
              <img src="/img_mv01.jpg" alt="堂平天文台" className="l-mv__bg" />
            </picture>

            {/* <img src="/img_star03.svg" alt="星座のイラスト" className="l-mv__bg-star01" /> */}


            <div className="l-mv__inner">
              <img src="/img_logo01.svg" alt="堂平天文台ドーム デジタルミュージアム" className="l-mv__logo" />
              <h1 className="l-mv__index">堂平天文台 <br className="sp-only" />デジタルMUSEUMへようこそ</h1>
              <p className="l-mv__text">昭和37年以来、観測所として日本の天文学を<br className="sp-only" />支えてきた「堂平観測所ドーム」。<br/>
                その魅力を臨場感のある<br className="sp-only" />デジタルMUSEUMとして体感いただけます。
              </p>
            </div>
          </div>
          
          <div className="l-mv__scroll"><p className="l-mv__scrollText">scroll</p></div>
        </section>

        <section className="l-experience">
          {/* <img src="/img_star01.svg" alt="星座のイラスト" className="l-experience__star01" />
          <img src="/img_star02.svg" alt="星座のイラスト" className="l-experience__star02" />
          <img src="/img_star04.svg" alt="星座のイラスト" className="l-experience__star03" />
          <img src="/img_star05.svg" alt="星座のイラスト" className="l-experience__star04" />
          <img src="/img_star06.svg" alt="星座のイラスト" className="l-experience__star05" /> */}
          <div className="l-experience__inner">
            
            <h2 className="l-experience__index">360度の堂平天文台ドームを<br />体験してみよう</h2>

            <div className="l-experience__movie">
              <div className="l-experience__movie-content">
                <video className="detail-custom" id="product-clip__video-player_html5" preload="auto" autoPlay muted loop playsInline>
                  <source src="/movie01.mp4" type="video/mp4" />
                </video>
                <div className="l-experience__movie-button" onClick={handleOpenMatterPort}>
                  <p className="l-experience__movie-button-text">TAP</p>
                  <button className="l-experience__movie-button-area"></button>
                </div>
              </div>
            </div>
          </div>

          { idDisplayBackToTopButton && <button onClick={handleReloadPage} className="l-experience__back-button">トップに戻るボタン</button> }

          {/* <iframe
            src="https://my.matterport.com/show/?m=JVuiBtyUPoW&play=1&hl=1&qs=1"
            allowFullScreen
            className={`l-experience__data ${isIframeOpacityActive ? 'iframeOpacity' : ''}`}
          >
          </iframe> */}
          {/* { matterPortModalOpen && 
            <MatterPortModal />
          } */}

          <Link href={`/image/1`}>aaa</Link>

        </section>

        {/* <section className="l-experience">
          <div className="l-experience__inner">
            <h2 className="l-experience__index">360度の堂平天文台ドームを<br />体験してみよう</h2>
            <h2 className="l-experience__index">ページ遷移するパターン</h2>

            <div className="l-experience__movie">
              <div className="l-experience__movie-content">
                <video className="detail-custom" id="product-clip__video-player_html5" preload="auto" autoPlay muted loop playsInline>
                  <source src="/movie01.mp4" type="video/mp4" />
                </video>
                <div className="l-experience__movie-button" onClick={handleMoveToMatterPort}>
                  <p className="l-experience__movie-button-text">TAP</p>
                  <button className="l-experience__movie-button-area"></button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </div>

      <section className="l-gallery" style={{ zIndex: galleryZIndex }}>
        <div className="l-gallery__inner">
          <h2 className="l-gallery__index">堂平天文台 ギャラリー</h2>
          <Gallery />
        </div>
      </section>

      <section className="l-buttonArea">
        <Button hrefURL={"/"} addClasses={"l-buttonArea__link"}>TOPへ戻る</Button>
      </section>
      
      { isDisplayBackground02 &&
        <div v-if="isDisplayBackground02" className="l-experience__background">
          <p style={{ fontSize: '30px', textAlign: 'center', margin: '80px auto 0' }}>(仮) 円が収縮するアニメーション</p>
        </div>
      }
      { isDisplayBackground01 &&
        <div v-if="isDisplayBackground02" className="l-experience__background">
          <p style={{ fontSize: '30px', textAlign: 'center', margin: '80px auto 0' }}>(仮) 円が収縮するアニメーション</p>
        </div>
      }

      <Footer />
    </>
  );
}
