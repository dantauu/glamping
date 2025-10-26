import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import style from './card-images-mobile.module.scss'
import Link from 'next/link'

const CardImagesMobile = () => {
  const images = [
      '/assets/img/card-image-fig.jpg',
      '/assets/img/card-image-fig.jpg',
      '/assets/img/card-image-fig.jpg',
      '/assets/img/card-image-fig.jpg'] 

  return (
    <div className={style.cardImagesWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation={{
          nextEl: `.${style.arrowRight}`,
          prevEl: `.${style.arrowLeft}`,
        }}
        pagination={{
          type: 'fraction',
          el: `.${style.pagination}`,
          renderFraction: (currentClass, totalClass) => `
            <span class="${currentClass}"></span>/<span class="${totalClass}"></span>
          `,
        }}
        className={style.swiperContainer}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={style.cardItem}>
            <img className={style.cardItemInner} src={img} alt="" />
          </SwiperSlide>
        ))}
        <div className={style.controls}>
          <Link href={'/search'} className={style.arrow}>
            <img src="/assets/img/arrow-black.svg" alt="" />
          </Link>
          <div className={style.heart}>
            <img src="/assets/img/heart.svg" alt="" />
          </div>
          
          <div className={style.countWrapper}>
            <div className={style.arrowLeft}>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13 1.9375L7.70711 7.23039C7.31658 7.62092 6.68342 7.62092 6.29289 7.23039L1 1.9375" stroke-width="2" stroke-linecap="round"/>
               </svg>
            </div>
            <div className={style.pagination} />
            <div className={style.arrowRight}>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13 1.9375L7.70711 7.23039C7.31658 7.62092 6.68342 7.62092 6.29289 7.23039L1 1.9375" stroke-width="2" stroke-linecap="round"/>
               </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default CardImagesMobile