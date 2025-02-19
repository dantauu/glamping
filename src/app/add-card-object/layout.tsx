import ButtonsAddCard from "@/intities/intities-add-card-object/buttons-add-card/buttons-add-card"
import HeaderAddCardObject from "@/intities/intities-add-card-object/header-add-card-object/header-add-card-object"
import ProgressBarAddCard from "@/shared/ui/add-card-object-ui/progress-bar-add-card/progress-bar-add-card"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className='container'>
				<HeaderAddCardObject />
				<div className=''>{children}</div>
                <ButtonsAddCard />
			</div>
            <ProgressBarAddCard />
		</>
	)
}
