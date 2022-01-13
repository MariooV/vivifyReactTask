import React, { useReducer } from 'react';

const initialInput = { value: '', isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  } else if (action.type === 'RESET') {
    return initialInput;
  }

  return initialInput;
};

const useValidation = validationType => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInput);

  const isInputValid = validationType(inputState.value);
  const hasError = !isInputValid && inputState.isTouched;

  const valueChangedHandler = event => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isInputValid: isInputValid,
    error: hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useValidation;
