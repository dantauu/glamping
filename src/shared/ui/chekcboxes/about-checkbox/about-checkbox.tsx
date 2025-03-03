'use client'
import style from './about-checkbox.module.scss'

const AboutObjectCheckbox = ({ 
  checked, 
  onChange 
}: {
  checked: boolean
  onChange: () => void
}) => {
  return (
    <div>
      <label className={style.checkboxContainer}>
        <input
          className={style.customCheckbox}
          onChange={onChange}
          checked={checked}
          type='checkbox'
        />
        <span className={style.checkmark}></span>
      </label>
    </div>
  )
}

export default AboutObjectCheckbox