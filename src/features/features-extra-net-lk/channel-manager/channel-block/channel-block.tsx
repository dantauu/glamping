import style from './channel-block.module.scss'


const ChannelBlock = ({ setShowModal }: any) => {
   return (
      <div className={style.channelManagerWrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Менеджер каналов
            </h1>
         </div>
         <div className={style.blockInput}>
            <div className={style.blockInputUp}>
               <div className={style.inputImg}>
                  <img src={'/assets/img/input-arrow.svg'} alt="" />
               </div>
               <div className={style.inputRight}>
                  <div className={style.inputRightTitle}>
                     <p className={style.inputRightTitleInner}>
                        Менеджер каналов
                     </p>
                  </div>
                  <div className={style.inputDotWrapper}>
                     <div className={style.inputDot}></div>
                     <div className={style.dotText}>
                        <p className={style.dotTextInner}>
                           Не подключен
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className={style.blockInputBotton}>
               <button onClick={() => setShowModal(true)} className={style.button}>
                  Подключить
               </button>
            </div>
         </div>
      </div>
   )
}

export default ChannelBlock