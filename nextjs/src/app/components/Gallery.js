import Link from "next/link"
import { useEffect, useState } from "react"
import galleryData from "../data/gallery.json"

// Swiper
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./Button";

export const Gallery = () => {

  // ギャラリーのデータ
  const [currentCategory, setCurrentCategory] = useState('category01');
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    if(galleryData.categories[currentCategory]) {
      setGalleryItems(galleryData.categories[currentCategory])
    }
  }, [currentCategory])

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  // Swiper設定
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  };

  return (
    <div className="l-gallery__category">

      <ul className="l-gallery__categoryList">
        <li className="l-gallery__categoryItem" onClick={() => handleCategoryClick('category01')}>観測装置１</li>
        <li className="l-gallery__categoryItem" onClick={() => handleCategoryClick('category02')}>91㎝反射望遠鏡</li>
        <li className="l-gallery__categoryItem" onClick={() => handleCategoryClick('category03')}>観測装置２</li>
      </ul>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        breakpoints={slideSettings}
        slidesPerView={"auto"}
        centeredSlides={true}
        direction={"horizontal"}
        loop
        speed={1000}
        navigation
        parallax={true}
        initialSlide="1"
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={{
          clickable: true,
        }}
        className="l-gallery__slider"
      >
        {galleryItems.map((galleryItem, index) => (
          <SwiperSlide key={index} className="l-gallery__sliderItem">
            <div className="l-gallery__sliderWrap">
              <img src={galleryItem.imgPath01} alt="スライダー画像" className="l-gallery__sliderImg" />
              <img src="/img_slider_shadow01.png" alt="" className="l-gallery__sliderShadow" />
            </div>
            <h3 className="l-gallery__sliderName">{galleryItem.name}</h3>
            <Button hrefURL={`/test/${galleryItem.id}`} addClasses={"l-gallery__sliderButton"}>詳細を見る</Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}