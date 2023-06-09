import React from 'react';
import style from "./DisplayInstruction.module.css";
import {Input} from "./Input";


type DisplayInstructionPropsType = {
  maxValue: number
  minValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  maxInputError: boolean
  minInputError: boolean
  setCondition: (value: boolean) => void
}

export const DisplayInstruction = ({
                                     maxValue,
                                     minValue,
                                     setMinValue,
                                     setMaxValue,
                                     setCondition,
                                     maxInputError,
                                     minInputError
                                   }: DisplayInstructionPropsType) => {
  return (
    <div>
      <div className={style.instruction}>
        <div className={style.inputWrapper}>
          <Input
            callBack={setMaxValue}
            value={maxValue}
            type={'number'}
            spanValue={'max value'}
            inputError={maxInputError}
            setCondition={setCondition}
          />
          <Input
            callBack={setMinValue}
            value={minValue}
            type={'number'}
            spanValue={'start value'}
            inputError={minInputError}
            setCondition={setCondition}
          />
        </div>
      </div>
    </div>
  )
}

