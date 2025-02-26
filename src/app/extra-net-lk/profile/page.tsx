import RenderDataProfileExtra from "@/features/features-extra-net-lk/profile/render-profile-extra/render-profile-extra"
import { RenderProfileExtraProvider } from "@/providers/render-profile-extra/render-profile-extra"


const ProfileExtraPage = () => {
   return (
      <div className="">
         <RenderProfileExtraProvider>
            <RenderDataProfileExtra />
         </RenderProfileExtraProvider>
      </div>
   )
}

export default ProfileExtraPage