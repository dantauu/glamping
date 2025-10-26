'use client'

import MyProfile from "@/entities/entities-personal-account-lk/my-profile/my-profile"
import ProfileButtons from "../profile-buttons/profile-buttons"
import { useRenderProfile } from "@/providers/render-my-profile/render-my-profile"
import { JSX } from "react"
import ChangePassword from "../change-password/change-password"

type RenderContentProps = {
    [key: string]: JSX.Element
}

const RenderData = () => {
    const { render } = useRenderProfile()
    const renderContentProfile: RenderContentProps = {
        'Личные данные': <MyProfile />,
        'Смена пароля': <ChangePassword />
    }
    return (
			<div className=''>
					<ProfileButtons />
					{renderContentProfile[render] || null}
			</div>
		)
}

export default RenderData