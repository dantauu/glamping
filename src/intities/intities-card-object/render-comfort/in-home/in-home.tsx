import { useMediaQuery } from '@/hooks/useMediaQuery'
import { homeComfortItems } from '../../../../../public/data/data'
import style from './in-home.module.scss'
import InHomeMobile from './in-home-mobile/in-home-mobile'

const InHome = () => {
	const isMobile = useMediaQuery('(max-width: 930px)')
    return (
		<>
		{isMobile ? <InHomeMobile /> : (
			<div className={style.inComplexWrapper}>
			{homeComfortItems.map(category => (
				<div key={category.id} className={style.inComplexItem}>
					<div key={category.id} className={style.category}>
						<div className={style.title}>
                     <div className={style.icon}>
                        <img className={style.iconInner} 
                           src={category.icon} alt="" />
                     </div>
                     <div className="">
							    <h3 className={style.titleInner}>
                           {category.title}
                        </h3>
                     </div>
						</div>
                    <div className={style.fullWrapperText}>
						<ul className={style.wrapperText}>
							{category.itemsText.map((item, index) => (
								<li className={style.mainText} key={index}>
									{typeof item === 'string' ? (
										item
								) : (
									<> 
                           <div className={style.wrapper}></div>
									</>
										)}
									</li>
									))}
								</ul>
                     </div>
						</div>
					</div>
				))}
			</div>
		)}
			</>
		)
}

export default InHome