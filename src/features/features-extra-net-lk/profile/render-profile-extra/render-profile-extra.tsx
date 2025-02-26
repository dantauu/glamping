'use client'

import MyProfile from "@/intities/intities-personal-account-lk/my-profile/my-profile"
// import ProfileButtons from "../profile-buttons/profile-buttons"
import { useRenderProfile } from "@/providers/render-my-profile/render-my-profile"
import { JSX } from "react"
import ButtonsExtra from "../buttons-extra/buttons-extra"
import ProfileExtraNet from "@/intities/intities-extra-net-lk/profile/profile-extra-net/profile-extra-net"
import ChangePasswordExtra from "@/intities/intities-extra-net-lk/profile/change-password-extra/change-password-extra"
import { useRenderExtraProfile } from "@/providers/render-profile-extra/render-profile-extra"

type RenderContentProps = {
    [key: string]: JSX.Element
}

const RenderDataProfileExtra = () => {
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

export default RenderDataProfileExtra