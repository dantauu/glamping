import HeaderExtraLk from "@/intities/intities-extra-net-lk/header-extra-lk/header-extra-lk"

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='container'>
            <HeaderExtraLk />
			<div className=''>
				{children}
			</div>
		</div>
	)
}
