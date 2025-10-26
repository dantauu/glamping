'use client'

import { useState } from 'react';
import style from './reviews-comment.module.scss'

const ReviewsComment = () => {
    const [value, setValue] = useState('');
    return (
        <div className={style.reviewsCommentWrapper}>
            <div className={style.title}>
                <p className={style.titleInner}>
                    Комментарий <span className={style.red}>*</span>
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
                            {`Расскажите о ваших впечатлениях от данного места, его достоинствах и недостатках.`.split('\n').map((line, index) => (
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

export default ReviewsComment