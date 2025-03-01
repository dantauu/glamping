import { InputInfoProps } from "@/app/types/global"
import Image from "next/image"

const InputInfoMobile = ({ 
    onClick,
    inputInfoWrapper,
    inputInfoTextWrapper,
    inputInfo,
    inputInfoText,
    text,
    inputInfoImg,
    inputInfoImgInner,
    img
 }: InputInfoProps) => {
    return (
			<div onClick={onClick} className={inputInfoWrapper}>
				<div className={inputInfoTextWrapper}>
               <div className={inputInfoImg}>
                  <Image className={inputInfoImgInner} src={img} alt='' 
                            width={17} height={17} />
               </div>
               <div className={inputInfo}>
						<p className={inputInfoText}>
                     {text}
                  </p>
					</div>
				</div>
			</div>
		)
}

export default InputInfoMobile