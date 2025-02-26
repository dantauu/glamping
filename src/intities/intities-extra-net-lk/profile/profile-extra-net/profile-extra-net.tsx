
import ChangePhotoExtra from "@/features/features-extra-net-lk/profile/change-photo-extra/change-photo-extra"
import PersonalDataProfile from "../person-data-profile/person-data-profile"
import Requisites from "../requisites/requisites"
import BankRequisites from "../bank-requisites/bank-requisites"
import ContactsBufer from "../contacts-bufer/contacts-bufer"
import style from './profile-extra-net.module.scss'
import ButtonsSaveDel from "@/features/features-extra-net-lk/profile/buttons-save-del/buttons-save-del"

const ProfileExtraNet = () => {
    return (
			<div className=''>
				<div className={style.wrapper}>
               <PersonalDataProfile />
					<div className={style.changePhoto}>
						<ChangePhotoExtra />
					</div>
				</div>
					<Requisites />
					<BankRequisites />
					<ContactsBufer />
					<ButtonsSaveDel />
			</div>
		)
}

export default ProfileExtraNet