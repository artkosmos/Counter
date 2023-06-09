import React from "react";
import style from "./Display.module.css";

type DisplayCounterPropsType = {
  counter: number
  maxValue: number
  maxInputError: boolean
  minInputError: boolean
  condition: boolean
}


export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({
                                                      counter,
                                                      maxValue,
                                                      maxInputError,
                                                      minInputError,
                                                      condition,
                                                    }) => {


  return (
    <div className={style.scoreboard}>
      {maxInputError || minInputError
        ? <span className={style.counterErrorMessage}>Choose correct values!</span>
        : condition
          ? <span className={style.counterMessage}>Choose value and press SET</span>
          : <span className={maxValue && counter === maxValue ? style.red : ''}>{counter}</span>}
    </div>
  )
}