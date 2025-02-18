import { RenderNumberMailProvider } from "@/providers/render-number-mail/render-number-mail"
import RenderMailNumberReg from "@/features/features-extra-net-auth/render-mail-number-reg/render-mail-number-reg"



const RegisterNumberPage = () => {
    return (
			<RenderNumberMailProvider>
				<RenderMailNumberReg />
			</RenderNumberMailProvider>
		)
}

export default RegisterNumberPage