"use client";

import styles from "../style.scss";

import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function TestPage() {
  const [isIframeOpacityActive, setIsIframeOpacityActive] = useState(false);
  const [bodyNoScroll, setBodyNoScroll] = useState(false);
  const [isDisplayBackground01, setIsDisplayBackground01] = useState(false);
  const [isDisplayBackground02, setIsDisplayBackground02] = useState(false);
  const [idDisplayBackToTopButton, setIdDisplayBackToTopButton] = useState(false);
  const [galleryZIndex, setGalleryZIndex] = useState(10);

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
      setIsIframeOpacityActive(true);
      setIsDisplayBackground02(false);
      setIdDisplayBackToTopButton(true);
      setGalleryZIndex(-1);
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
    window.location.href = "/test";
    setIdDisplayBackToTopButton(false);
  };

  return (
    <>

      <div className="p-top__bg">
        {/* <Image src="/img_star03.svg" alt="" className="l-mv__bg-star03" width={100} height={50} />
        <img src="/img_star03.svg" alt="" className="l-mv__bg-star03" />
        <img src="/img_star04.svg" alt="" className="l-mv__bg-star04" />
        <img src="/img_star05.svg" alt="" className="l-mv__bg-star05" />
        <img src="/img_star06.svg" alt="" className="l-mv__bg-star06" /> */}

        <section className="l-mv">
          <div className="l-mv__wrap">
            <img src="/img_mv01.jpg" alt="" className="l-mv__bg" />
          </div>
          <div className="l-mv__inner">
            <img src="/img_logo01.svg" alt="" className="l-mv__logo" />
            <h1 className="l-mv__index">next.js実装　堂平天文台 デジタルMUSEUMへようこそ</h1>
            <p className="l-mv__text">昭和37年以来、観測所として日本の天文学を支えてきた「堂平観測所ドーム」。<br/>
              その魅力を臨場感のあるデジタルMUSEUMとして体感いただけます。
            </p>
          </div>
        </section>

        <section className="l-experience">
          {/* <img src="/img_star01.svg" alt="" className="l-mv__bg-star01 l-experience__star01" />
          <img src="/img_star02.svg" alt="" className="l-mv__bg-star02 l-experience__star02" /> */}
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

          <iframe
            src="https://my.matterport.com/show/?m=JVuiBtyUPoW&play=1&hl=1&qs=1"
            frameBorder="0"
            allowFullScreen
            className={`l-experience__data ${isIframeOpacityActive ? 'iframeOpacity' : ''}`}
          >
          </iframe>

        </section>

        {/* <section class="l-experience">
          <div class="l-experience__inner">
            <h2 class="l-experience__index">360度の堂平天文台ドームを<br />体験してみよう</h2>
            <h2 class="l-experience__index">ページ遷移するパターン</h2>

            <div class="l-experience__movie">
              <div class="l-experience__movie-content">
                <video class="detail-custom" id="product-clip__video-player_html5" preload="auto" autoPlay muted loop playsInline>
                  <source src="/movie01.mp4" type="video/mp4" />
                </video>
                <div class="l-experience__movie-button" onClick={handleMoveToMatterPort}>
                  <p class="l-experience__movie-button-text">TAP</p>
                  <button class="l-experience__movie-button-area"></button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </div>

      <section className="l-gallery" style={{ zIndex: galleryZIndex }}>
        <div className="l-gallery__inner">
          <h2 className="l-gallery__index">堂平天文台 ギャラリー</h2>
          <ul className="l-gallery__categoryList">
            <li className="l-gallery__categoryItem">観測装置１</li>
            <li className="l-gallery__categoryItem is-current">91㎝反射望遠鏡</li>
            <li className="l-gallery__categoryItem">観測装置２</li>
          </ul>
        </div>
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
    </>
  );
}
