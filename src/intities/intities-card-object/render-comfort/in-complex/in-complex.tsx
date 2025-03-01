import { useMediaQuery } from '@/hooks/useMediaQuery'
import { complexComfortItems } from '../../../../../public/data/data'
import style from './in-comlplex.module.scss'
import InComplexMobile from './in-complex-mobile/in-complex-mobile'

const InComplex = () => {
	const isMobile = useMediaQuery('(max-width: 930px)')
    return (
		<>
		{isMobile ? <InComplexMobile /> : (
			<div className={style.inComplexWrapper}>
			{complexComfortItems.map(category => (
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
                                 <div className="">
												<p className={style.textInner}>
                                    	{item.name}
                                    </p>
                                 </div>
                                 <div className={style.wrapper}>
                                    <div className="">
										    		<p className={style.detailsInner}>
                                          {item.details && ` ${item.details}`}
                                       </p>
                                    </div>
                                    <div className="">
                                       <p className={style.priceInner}>
											    		{item.price && `  ${item.price}`}
                                       </p>
                                    </div>
                                 </div>
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

export default InComplex