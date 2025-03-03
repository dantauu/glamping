import { forwardRef } from 'react'
import style from './input-square.module.scss'

const InputSquare = forwardRef<HTMLInputElement, {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}>(({ value, onChange, onKeyDown }, ref) => {
  return (
    <div className={style.input}>
      <input
        ref={ref}
        className={style.inputInner}
        type="number"
        maxLength={1}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
})

InputSquare.displayName = 'InputSquare' // Добавляем для отладки

export default InputSquare