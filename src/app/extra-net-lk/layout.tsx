import HeaderExtraLk from "@/entities/entities-extra-net-lk/header-extra-lk/header-extra-lk"

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
