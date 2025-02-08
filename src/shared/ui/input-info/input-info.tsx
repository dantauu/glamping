import { InputInfoProps } from "@/app/types/global"
import Image from "next/image"

const InputInfo = ({ 
    title,
    onClick,
    inputInfoWrapper,
    inputInfoTextWrapper,
    inputInfoTitle,
    inputInfoTitleInner,
    inputInfo,
    inputInfoText,
    text,
    inputInfoImg,
    inputInfoImgInner,
    img
 }: InputInfoProps) => {
    return (
			<div onClick={onClick} className={inputInfoWrapper}>
				<div className={inputInfoTitle}>
					<p className={inputInfoTitleInner}>
                        {title}
                    </p>
				</div>
				<div className={inputInfoTextWrapper}>
					<div className={inputInfo}>
						<p className={inputInfoText}>
                            {text}
                        </p>
					</div>
                    <div className={inputInfoImg}>
                        <Image className={inputInfoImgInner} src={img} alt='' 
                            width={20} height={20} />
                    </div>
				</div>
			</div>
		)
}

export default InputInfo