import HeaderAddCardObject from "@/intities/intities-add-card-object/header-add-card-object/header-add-card-object"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='container'>
            <HeaderAddCardObject />
			<div className=''>
                {children}
            </div>
		</div>
	)
}
