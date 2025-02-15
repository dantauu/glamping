import AuthCode from "@/features/features-personal-account/auth-code/auth-code"
import Header from "@/shared/ui/personal-account-ui/header/header"


const AuthCodePage = () => {
    return (
        <div className="container">
            <Header />
            <AuthCode />
        </div>
    )
}

export default AuthCodePage