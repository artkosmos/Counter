import {ChangeEvent} from 'react';
import style from './Input.module.css'

type InputPropsType = {
  type: string
  spanValue: string
  value: number
  callBack?: (value: number) => void
  inputError: boolean
  setCondition?: (value: boolean) => void
}

export const Input = ({
                        type,
                        spanValue,
                        value,
                        callBack,
                        inputError,
                        setCondition
                      }: InputPropsType) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack?.(Number(event.currentTarget.value))
    setCondition?.(true)
  }

  const currentClassName = inputError ? `${style.input} ${style.error}` : style.input

  return (
    <div className={style.inputWrapper}>
      <div className={style.inputLine}>
        <span>{spanValue}</span>
        <input
          value={value}
          onChange={onChangeHandler}
          className={currentClassName}
          type={type}
        />
      </div>
      <div className={inputError ? `${style.errorMessage} ${style.active}` : style.errorMessage}>
        invalid value!
      </div>
    </div>
  )
}
