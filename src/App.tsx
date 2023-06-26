import {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";
import {getFromLocalStorage, saveToLocalStorage} from "./localStorage/srorage";


function App() {

  const [maxValue, setMaxValue] = useState<number>(getFromLocalStorage('maxValue', 5))
  const [minValue, setMinValue] = useState<number>(getFromLocalStorage('minValue', 0))
  const [counter, setCounter] = useState<number>(getFromLocalStorage('minValue', 0))
  const [maxInputError, setMaxInputError] = useState<boolean>(false)
  const [minInputError, setMinInputError] = useState<boolean>(false)
  const [condition, setCondition] = useState<boolean>(false)


  useEffect(() => {
    if (maxValue === minValue || minValue > maxValue) {
      setMaxInputError(true)
      setMinInputError(true)
    } else if (maxValue < 0) {
      setMaxInputError(true)
    } else if (minValue < 0) {
      setMinInputError(true)
    } else {
      setMaxInputError(false)
      setMinInputError(false)
    }
  }, [minValue, maxValue])

  const increment = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(minValue)
  }

  const installInstruction = () => {
    saveToLocalStorage('maxValue', maxValue)
    saveToLocalStorage('minValue', minValue)
    setCounter(minValue)
    setCondition(false)
  }

  return (
    <div className={s.mainContentWrapper}>
      <Counter
        increment={increment}
        reset={reset}
        currentValue={counter}
        maxInputError={maxInputError}
        minInputError={minInputError}
        condition={condition}
        minValue={minValue}
        maxValue={maxValue}
      />
      <Instruction
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        maxInputError={maxInputError}
        minInputError={minInputError}
        condition={condition}
        setCondition={setCondition}
        instruction={installInstruction}
      />
    </div>
  )
}

export default App;
