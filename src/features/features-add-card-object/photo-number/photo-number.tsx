'use client'
import { useState, useRef } from 'react'
import style from './photo-number.module.scss'

const PhotoObject = () => {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 20 - files.length)
      setFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeImage = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={style.photoObjectWrapper}>
      <div className={style.title}>
        <h1 className={style.titleInner}>
            Фото номера
        </h1>
      </div>
      <div className={style.description}>
        <p className={style.descriptionInner}>
          Добавьте фотографии вашего номера (минимум - 1 шт.)
        </p>
      </div>
      
      <div className={style.wrapperBlockPhoto}>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={inputRef}
          onChange={handleUpload}
          style={{ display: 'none' }}
        />

        {files.length === 0 ? (
          <>
            <div className={style.img}>
              <img src={'/assets/img/photos.svg'} alt="" />
            </div>
            <div className={style.titlePhoto}>
              <p className={style.titlePhotoInner}>
                Загрузите фото <span className={style.mobile}>или перетащите файл</span>
              </p>
            </div>
            <div className={style.descriptionPhoto}>
              <p className={style.descriptionPhotoInner}>
                JPG/ PNG/ Максимум 10 Мбайт/ Минимум 312px x 312px
              </p>
            </div>
            <div className={style.button}>
              <button 
                className={style.buttonInner}
                onClick={() => inputRef.current?.click()}
              >
                Загрузить фото
              </button>
            </div>
          </>
        ) : (
          <div className={style.gridContainer}>
            {files.map((file, i) => (
              <div key={i} className={style.imageWrapper}>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className={style.previewImage}
                />
                <button className={style.removeButton}
                onClick={() => removeImage(i)}>
                  <img src={'/assets/img/krest-black.svg'} alt="" />
                </button>
              </div>
            ))}
            {files.length < 20 && (
            <div onClick={() => inputRef.current?.click()} 
                className={style.wrapperAddMore}>
                <div className={style.imgPlus}>
                    <img src={'/assets/img/plus-green.svg'} alt="" />
                </div>
                <button className={style.addMoreButton}>
                    Добавить ещё
                </button>
            </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoObject