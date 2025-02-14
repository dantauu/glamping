import AuthPersonalAccount from "@/features/features-personal-account/auth-personal-account/auth-personal-account"
import Header from "@/shared/ui/personal-account-ui/header/header"


const PersonalAccount = () => {
    return (
        <div className="container">
            <Header />
            <AuthPersonalAccount />
        </div>
    )
}

export default PersonalAccount