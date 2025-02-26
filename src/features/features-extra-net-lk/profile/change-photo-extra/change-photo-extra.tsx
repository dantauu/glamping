'use client'

import { useState, useRef } from 'react'
import style from './change-photo-extra.module.scss'

const ChangePhotoExtra = () => {
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const url = URL.createObjectURL(file)
			setImageUrl(url)
		}
	}

	const handleRemoveImage = () => {
		if (imageUrl) {
			URL.revokeObjectURL(imageUrl)
			setImageUrl(null)
		}
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	return (
		<div className={style.container}>
			<input
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				ref={fileInputRef}
				className={style.hiddenInput}
				id='image-upload'
			/>

			{imageUrl ? (
				<div className={style.imageWrapper}>
					<img src={imageUrl} alt='Uploaded preview' className={style.image} />
					<button
						type='button'
						onClick={handleRemoveImage}
						className={style.removeButton}
						aria-label='Remove image'
					>
						<img src={'/assets/img/krest-or.svg'} alt="" />
					</button>
				</div>
			) : (
				<>
				<label htmlFor='image-upload' className={style.uploadButton}>
					<div className=''>
						<img src={'/assets/img/photo.svg'} alt="" />
					</div>
					<div className="">
						<span className={style.buttonInner}>Добавить фото</span>
					</div>
				</label>
				<div className={style.absoluteText}>
					<p className={style.absoluteTextInner}>
						A
					</p>
				</div>
				</>
			)}
		</div>
	)
}

export default ChangePhotoExtra
