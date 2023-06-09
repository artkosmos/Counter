import React from 'react';
import style from "./Counter.module.css";
import {Button} from "./Button";
import {DisplayCounter} from "./Display";

type CounterPropsType = {
  currentValue: number
  increment: () => void
  reset: () => void
  maxInputError: boolean
  minInputError: boolean
  condition: boolean
  minValue: number
  maxValue: number
}

export const Counter = ({
                          increment,
                          reset,
                          currentValue,
                          maxInputError,
                          minInputError,
                          condition,
                          minValue,
                          maxValue
                        }: CounterPropsType) => {
  return (
    <div className={style.counter}>
      <div className={style.contentWrapper}>
        <DisplayCounter
          counter={currentValue}
          maxInputError={maxInputError}
          minInputError={minInputError}
          condition={condition}
          maxValue={maxValue}
        />
        <div className={style.buttonsArea}>
          <Button
            using={'counter'}
            callBack={increment}
            disabled={currentValue === maxValue || condition}
          >ADD
          </Button>
          <Button
            using={'counter'}
            callBack={reset}
            disabled={currentValue === minValue || condition}
          >RESET
          </Button>
        </div>
      </div>
    </div>
  );
};
