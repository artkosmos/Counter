import React from 'react';
import style from "./Instruction.module.css";
import {Button} from "./Button";
import {DisplayInstruction} from "./DisplayInstruction";

type InstructionPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  maxInputError: boolean
  minInputError: boolean
  condition: boolean
  setCondition: (value: boolean) => void
  instruction: () => void
}

export const Instruction = ({
                              maxValue,
                              minValue,
                              setMaxValue,
                              setMinValue,
                              maxInputError,
                              minInputError,
                              condition,
                              setCondition,
                              instruction
                            }: InstructionPropsType) => {


  return (
    <div>
      <div className={style.instruction}>
        <div className={style.contentWrapper}>
          <DisplayInstruction
            maxValue={maxValue}
            minValue={minValue}
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
            maxInputError={maxInputError}
            minInputError={minInputError}
            setCondition={setCondition}
          />
          <div className={style.buttonsArea}>
            <Button
              using={'instruction'}
              callBack={instruction}
              disabled={minInputError || maxInputError || !condition}
            >SET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
