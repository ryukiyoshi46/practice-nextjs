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

  // カテゴリーに対応するデータを取得する関数
  const getGalleryDataByCategory = (categoryName) => {
    const categoryData = galleryData.categories.find(category => category.categoryName === categoryName);
    return categoryData ? categoryData.data : [];
  };

  // カテゴリーが変更されたらデータを取得する
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    const data = getGalleryDataByCategory(currentCategory);
    setGalleryItems(data);
  }, [currentCategory]);

  // Swiper設定
  const slideSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <div>

      <div className="l-gallery__category">
        <ul className="l-gallery__categoryList">
          {galleryData.categories.map((categoryItem) => (
            <li
              key={categoryItem.categoryName}
              className={`l-gallery__categoryItem ${currentCategory === categoryItem.categoryName ? 'is-current' : ''}`}
              onClick={() => handleCategoryClick(categoryItem.categoryName)}
            >
              {categoryItem.categoryLabel}
            </li>
          ))}
        </ul>
      </div>

      {galleryItems.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          breakpoints={slideSettings}
          slidesPerView={"auto"}
          centeredSlides={true}
          direction={"horizontal"}
          loop
          speed={1000}
          navigation
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
              <Button hrefURL={`/${galleryItem.id}`} addClasses={"l-gallery__sliderButton"}>詳細を見る</Button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}