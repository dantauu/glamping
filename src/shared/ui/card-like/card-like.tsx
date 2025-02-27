import { useState, useRef, useEffect } from 'react'
import { cardLikeItems } from '../../../../public/data/data'
import style from './card-like.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import CardLikeMobile from './card-like-mobile/card-like-mobile'

const CardLike = () => {
	const isMobile = useMediaQuery('(max-width: 630px)')
  const [_sliderWidth, setSliderWidth] = useState(0)
  const [startX, setStartX] = useState<number>(0) 
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth)
    }
  }, [])

  const getCardWidth = () => {
    if (!cardRef.current) return 0
    return cardRef.current.offsetWidth + 20
  }

  const handleScroll = (scrollOffset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: scrollOffset,
        behavior: 'smooth'
      })
    }
  }

  const goToNext = () => {
    const cardWidth = getCardWidth()
    if (sliderRef.current) {
      handleScroll(sliderRef.current.scrollLeft + cardWidth * 4)
    }
  }

  const goToPrev = () => {
    const cardWidth = getCardWidth()
    if (sliderRef.current) {
      handleScroll(sliderRef.current.scrollLeft - cardWidth * 4)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    if (!sliderRef.current) return
    setStartX(touch.pageX - sliderRef.current.offsetLeft)
    sliderRef.current.style.scrollBehavior = 'auto'
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return
    const touch = e.touches[0]
    const x = touch.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - walk
  }

  return (
		<>
			{isMobile ? (
				<CardLikeMobile />
			) : (
				<div className={style.cardLikeWrapper}>
			<div
				className={style.cardLikeSlider}
				ref={sliderRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={() => {
					if (sliderRef.current) {
						sliderRef.current.style.scrollBehavior = 'smooth'
					}
				}}
			>
				{cardLikeItems.map((item, index) => (
					<div
						key={index}
						className={style.cardLike}
						ref={index === 0 ? cardRef : null}>
						<div className={style.mainImg}>
							<img className={style.mainImgInner} src={item.img} alt='' />
						</div>
						<div className={style.absoluteImg}>
							<img
								className={style.absoluteImgInner}
								src={item.absoluteImg}
								alt=''
							/>
						</div>
						<div className={style.cardLikeContentWrapper}>
							<div className={style.title}>
								<h3 className={style.titleInner}>{item.title}</h3>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>{item.description}</p>
							</div>
							<div className={style.priceWrapper}>
								<p className={style.priceNumberInner}>{item.price}р.</p>
								<p className={style.timePriceInner}>{item.timePrice}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className={style.buttonsNavWrapper}>
				<button className={style.prev} onClick={goToPrev}>
					<svg
						width='16'
						height='14'
						viewBox='0 0 16 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
				<button className={style.next} onClick={goToNext}>
					<svg
						width='16'
						height='14'
						viewBox='0 0 16 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={style.prevRight}
					>
						<path
							d='M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
			</div>
		</div>
			)}
		</>
	)
}

export default CardLike