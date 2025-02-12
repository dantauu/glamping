import { searchCardItems, searchCardItemsBlock } from '../../../../public/data/data'
import style from './search-card.module.scss'

const SearchCard = () => {
    return (
        <div className={style.searchCardWrapper}>
            {searchCardItems.map((item, index) => (
                <div key={index} className={style.searchCard}>
                    <div className={style.searchUpInformationWrapper}>
                    <div className={style.img}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={style.searchRightInformation}>
                        <div className={style.title}>
                            <h2 className={style.titleInner}>
                                {item.titleCard}
                            </h2>
                        </div>
                        <div className={style.informationCardWrapper}>
                            <div className={style.informationCard}>
                                <div className={style.iconInformarion}>
                                    <img className={style.iconInformarionInner} 
                                    src={item.iconMashtab} alt="" />
                                </div>
                                <div className={style.iconInformationText}>
                                    <p className={style.iconInformationTextInner}>
                                        {item.textMashtab}
                                    </p>
                                </div>
                            </div>
                            <div className={style.informationCard}>
                                <div className={style.iconInformarion}>
                                    <img className={style.iconInformarionInner} 
                                    src={item.iconMan} alt="" />
                                </div>
                                <div className={style.iconInformationText}>
                                    <p className={style.iconInformationTextInner}>
                                        {item.textMan}
                                    </p>
                                </div>
                            </div>
                             <div className={style.informationCard}>
                            <div className={style.iconInformarion}>
                                <img className={style.iconInformarionInner} 
                                src={item.iconBed} alt="" />
                            </div>
                            <div className={style.iconInformationText}>
                                <p className={style.iconInformationTextInner}>
                                    {item.textBed} 
                                </p>
                            </div>
                        </div>
                    </div>
                            <div className={style.haveWrapper}>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.wifiText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.mountText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.bassText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.phenText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.mangalText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.conditionText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.petText}
                                    </p>
                                </div>
                            </div>
                            <div className={style.show}>
                                <p className={style.showInner}>
                                    Показать все удобства
                                </p>
                            </div>
                        </div>
                        </div> 
                        <div className={style.informationTarifWrapperFull}>
                        <div className={style.informationTarifWrapper}>
                            <div className={style.tarifTitle}>
                                <div className={style.tarifTitleLeft}>
                                <div className={style.tarifTitleLeftText}>
                                    <h2 className={style.tarifTitleInner}>
                                        {item.tarifTextOne}
                                    </h2> 
                                </div>
                                <div className={style.tarifCondition}>
                                    <p className={style.tarifConditioninner}>
                                        Условия тарифа
                                    </p>
                                </div>
                              </div>
                                <div className={style.tarifTitleRight}>
                                  <div className={`
                                    ${style.alertWrapper}
                                    ${item.id === 2 && style.alertWrapperImg}`}>
                                    <div className={`
                                        ${style.alertText} 
                                        ${item.id === 2 && style.alertTextProps}`}>
                                        <p className={`
                                          ${style.alertTextInner}
                                          ${item.id === 2 && style.alertTextPropsInner}`}>
                                            {item.alertText}
                                        </p>
                                    </div>  
                                    <div className="">
                                        <img className={style.alertIcon} src={item.alertIcon} alt="" />
                                    </div>
                                </div>
                                    <div className={style.priceWrapper}>
                                        <div className={style.priceNumber}>
                                            <p className={style.priceNumberInner}>
                                                {item.priceOne}
                                            </p>
                                        </div>
                                        <div className={style.guestText}>
                                            <p className={style.guestTextInner}>
                                                {item.guestText}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.button}>
                                        <button className={style.buttonInner}>
                                            Выбрать
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.tarifTitleBottomWrapper}>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.noEatIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.noEatText}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.stoprIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.stoprText}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.creditCardIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.creditCardText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={style.informationTarifWrapper}>
                            <div className={style.tarifTitle}>
                                <div className={style.tarifTitleLeft}>
                                <div className={style.tarifTitleLeftText}>
                                    <h2 className={style.tarifTitleInner}>
                                        {item.tarifTextTwo}
                                    </h2> 
                                </div>
                                <div className={style.tarifCondition}>
                                    <p className={style.tarifConditioninner}>
                                        Условия тарифа
                                    </p>
                                </div>
                              </div>
                                <div className={style.tarifTitleRight}>
                                    <div className={style.priceWrapper}>
                                        <div className={style.priceNumber}>
                                            <p className={style.priceNumberInner}>
                                                {item.priceTwo}
                                            </p>
                                        </div>
                                        <div className={style.guestText}>
                                            <p className={style.guestTextInner}>
                                                {item.guestText}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.button}>
                                        <button className={style.buttonInner}>
                                            Выбрать
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.tarifTitleBottomWrapper}>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.eatIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.eatText}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.shareIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.shareText}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.tarifTitleBottom}>
                                    <div className={style.tarifTitleBottomIcon}>
                                        <img src={item.creditCardIcon} alt="" />
                                    </div> 
                                    <div className={style.tarifTitleBottomText}>
                                        <p className={style.tarifTitleBottomTextInner}>
                                            {item.creditCardText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <SearchCardBlock />
        </div>
    )
}

const SearchCardBlock = () => {
    return (
        <>
        <div className={style.searchCardBlockWrapper}>
            {searchCardItemsBlock.map((item, index) => (
                <div className={style.searchUpInformationWrapper}>
                    <div className={style.img}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={style.searchRightInformation}>
                        <div className={style.title}>
                            <h2 className={style.titleInner}>
                                {item.titleCard}
                            </h2>
                        </div>
                        <div className={style.informationCardWrapper}>
                            <div className={style.informationCard}>
                                <div className={style.iconInformarion}>
                                    <img className={style.iconInformarionInner} 
                                    src={item.iconMashtab} alt="" />
                                </div>
                                <div className={style.iconInformationText}>
                                    <p className={style.iconInformationTextInner}>
                                        {item.textMashtab}
                                    </p>
                                </div>
                            </div>
                            <div className={style.informationCard}>
                                <div className={style.iconInformarion}>
                                    <img className={style.iconInformarionInner} 
                                    src={item.iconMan} alt="" />
                                </div>
                                <div className={style.iconInformationText}>
                                    <p className={style.iconInformationTextInner}>
                                        {item.textMan}
                                    </p>
                                </div>
                            </div>
                             <div className={style.informationCard}>
                            <div className={style.iconInformarion}>
                                <img className={style.iconInformarionInner} 
                                src={item.iconBed} alt="" />
                            </div>
                            <div className={style.iconInformationText}>
                                <p className={style.iconInformationTextInner}>
                                    {item.textBed} 
                                </p>
                            </div>
                        </div>
                    </div>
                            <div className={style.haveWrapper}>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.wifiText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.mountText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.bassText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.phenText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.mangalText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.conditionText}
                                    </p>
                                </div>
                                <div className={style.haveItem}>
                                    <p className={style.haveItemInner}>
                                        {item.petText}
                                    </p>
                                </div>
                            </div>
                            <div className={style.show}>
                                <p className={style.showInner}>
                                    Показать все удобства
                                </p>
                            </div>
                        </div>
                    </div> 
                ))}
                <div className={style.blockWrapper}>
                    <div className={style.blockParts}>
                        <div className={style.blockPartLeft}>
                            <div className={style.blockPartLeftIcon}>
                                <img src={'/assets/img/block-orange.svg'} alt="" />
                            </div>
                            <div className={style.blockPartLeftText}>
                                <p className={style.blockPartLeftTextInner}>
                                    Рарспродано на данныпе даты заезда
                                </p>
                            </div>
                        </div>
                        <div className={style.blockPartRight}>
                            <button className={style.buttonBlock}>
                                Смотреть доступные даты
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard