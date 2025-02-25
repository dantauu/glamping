'use client'

import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import { useRef } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
import { motion } from 'framer-motion'
import style from './channel-modal.module.scss'

const words = [
   'Bnovo',
   'Travelline',
   'Lite PMS',
   'Контур.Отель'
]

const ChannelModal = ({ showModal, setShowModal }: any) => {
   const modalRef = useRef(null)

   useClickOutside(modalRef, () => {
         if (showModal) {
            setShowModal(false)
         }
      })
   return (
      <motion.div
         initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.4}}
         className={style.modalWrapperBack}>
         <div ref={modalRef} className={style.modalWrapper}>
            <div className={style.title}>
               <h1 className={style.titleInner}>
                  Выберите ваш менеджер каналов и нажмите «Сохранить»:
               </h1>
            </div>
            <div className={style.itemsCheck}>
               {words.map((item, index) => (
                  <div key={index} className={style.itemCheck}>
                     <div className={style.check}>
                        <CheckBoxCicle />
                     </div>
                     <div className={style.text}>
                        <p className={style.textInner}>
                           {item}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            <div className={style.buttonWrapper}>
                <div className={style.buttonCancel}>
                    <button onClick={() => setShowModal(false)}
                        className={style.buttonCancelInner}>
                        Отмена
                    </button>
                </div>
                <div className={style.buttonSave}>
                    <button className={style.buttonSaveInner}>
                        Сохранить
                    </button>
                </div>
            </div>
         </div>
      </motion.div>
   )
}

export default ChannelModal