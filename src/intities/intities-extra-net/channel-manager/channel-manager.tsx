import { runLineItems } from '../../../../public/data/data'
import Marquee from 'react-fast-marquee'
import style from './channel-manager.module.scss'


const ChannelManager = () => {
    return (
        <div className={style.channelManager}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Работаем с ведущими платформами бронирования
                    <span className={style.span}> (менеджерами каналов)</span>
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Настроив интеграцию с вашим менеджером каналов, вы сможете экономить время и управлять процессом бронирования в одном месте
                </p>
            </div>
            <div className={style.wrapperLine}>
                <Marquee
                    autoFill={true} 
                    pauseOnHover={false}
                    speed={130}
                    direction={'right'}>
                {runLineItems.map((item, index) => (
                    <div key={index} className={style.itemLine}>
                        <img src={item.img} alt="" />
                    </div>
                ))}
                </Marquee>
            </div>
            <div className={style.registerButton}>
                <button className={style.button}>
                    Зарегистрировать свой объект
                </button>
            </div>
        </div>
    )
}

export default ChannelManager