import ChangePhoto from "@/features/features-personal-account-lk/change-photo/change-photo"
import PersonalData from "../personal-data/personal-data"
import style from './my-profile.module.scss'
import Contacts from "../contacts/contacts"
import Bind from "../bind/bind"

const MyProfile = () => {
    return (
			<div className=''>
				<div className={style.wrapper}>
					<PersonalData />
					<div className={style.changePhoto}>
						<ChangePhoto />
					</div>
				</div>
                <Contacts />
                <Bind />
			</div>
		)
}

export default MyProfile