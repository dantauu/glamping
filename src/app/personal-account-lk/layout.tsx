import HeaderLk from "@/shared/ui/personal-account-ui/header-lk/header-lk"

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='container'>
            <HeaderLk />
			<div className=''>
				{children}
			</div>
		</div>
	)
}
