import RenderProfileExtra from "@/features/features-extra-net-lk/profile/render-profile-extra/render-profile-extra"
import { RenderProfileExtraProvider } from "@/providers/render-profile-extra/render-profile-extra"


const ProfileExtraPage = () => {
   return (
      <div className="">
         <RenderProfileExtraProvider>
            <RenderProfileExtra />
         </RenderProfileExtraProvider>
      </div>
   )
}

export default ProfileExtraPage