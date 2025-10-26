'use client'

import { JSX } from "react"
import ButtonsExtra from "../buttons-extra/buttons-extra"
import ProfileExtraNet from "@/entities/entities-extra-net-lk/profile/profile-extra-net/profile-extra-net"
import ChangePasswordExtra from "@/entities/entities-extra-net-lk/profile/change-password-extra/change-password-extra"
import { useRenderExtraProfile } from "@/providers/render-profile-extra/render-profile-extra"

type RenderContentProps = {
    [key: string]: JSX.Element
}

const RenderProfileExtra = () => {
    const { render } = useRenderExtraProfile()
    const renderContentProfile: RenderContentProps = {
        'Личные данные': <ProfileExtraNet />,
        'Смена пароля': <ChangePasswordExtra />
    }
    return (
			<div className=''>
               <ButtonsExtra />
					{renderContentProfile[render] || null}
			</div>
		)
}

export default RenderProfileExtra