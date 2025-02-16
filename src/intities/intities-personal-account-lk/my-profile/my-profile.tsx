import ChangePhoto from "@/features/features-personal-account-lk/change-photo/change-photo"
import PersonalData from "../personal-data/personal-data"
import style from './my-profile.module.scss'

const MyProfile = () => {
    return (
			<div className=''>
				<div className={style.wrapper}>
					<PersonalData />
					<div className={style.changePhoto}>
						<ChangePhoto />
					</div>
				</div>
			</div>
		)
}

export default MyProfile