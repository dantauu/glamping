import RenderData from "@/features/features-personal-account-lk/render-data/render-data"
import { RenderProfileProvider } from "@/providers/render-my-profile/render-my-profile"


const Profile = () => {
    return (
			<div className='container'>
				<RenderProfileProvider>
					<RenderData />
				</RenderProfileProvider>
			</div>
		)
}

export default Profile