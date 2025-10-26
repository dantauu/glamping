import CountItem from '@/shared/ui/add-card-object-ui/count-item/count-item'
import style from './modal-count-human.module.scss'
import ModalYears from '../modal-years/modal-years'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'

const ModalCountHuman = ({ onClose }: any) => {
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(modalRef, () => {
        if (showModal) {
            setShowModal(false)
        }
      })
    return (
      <div className={style.wrapper}>
        <div className={style.modalCountHuman}>
            <div className={style.titleWrapper}>
                <div className={style.titleLeft}>
                    <div className={style.title}>
                        <p className={style.titleInner}>
                            Взрослые
                        </p>
                    </div>
                    <div className={style.description}>
                        <p className={style.descriptionInner}>
                            от 18 лет
                        </p>
                    </div>
                </div>
                <div className={style.titleRight}>
                    <CountItem />
                </div>
            </div>
            <div className={style.countYearWrapper}>
                <div className={style.text}>
                    <p className={style.textInner}>
                        Ребёнок 3 года
                    </p>
                </div>
                <div className={style.krest}>
                    <img className={style.krestInner}
                        src={'/assets/img/krest-black.svg'} alt="" />
                </div>
            </div>
            <div onClick={() => setShowModal(true)} className={style.addKid}>
                <div className={style.addKidText}>
                    <p className={style.assKidTextInner}>
                        Добавить ребенка
                    </p>
                </div>
                <div className={`${style.addKidImg} ${showModal && style.rotate}`}>
                    <img src={'/assets/img/iconArrow.svg'} alt="" />
                </div>
            </div>
            <div className={style.descriptionYear}>
                <p className={style.descriptionYearInner}>
                    Возраст детей на момент выезда из отеля
                </p>
            </div>
            <div ref={modalRef} className="">
                <ModalYears showModal={showModal} />
            </div>
        </div>
     </div>
    )
}

export default ModalCountHuman