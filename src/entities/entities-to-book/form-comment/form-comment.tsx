'use client'
import { useState } from 'react';
import style from './form-comment.module.scss';

const FormComment = () => {
    const [value, setValue] = useState('');

    return (
        <div className={style.formComment}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Комментарий к заказу
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Выполнение пожеланий не гарантируется, но их постараются учесть
                </p>
            </div>
            <div className={style.inputDescription}>
                <div className={style.inputWrapper}>
                    <input 
                        className={style.inputDescriptionInner}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" 
                    />
                    {!value && (
                        <div className={style.customPlaceholderWrapper}>
                            <p className={style.customPlaceholder}>
                            {`Расскажите о ваших пожеланиях/ какими дополнительными услугами хотели бы воспользоваться/ 
                            другой важной информацией.`.split('\n').map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormComment