import { useEffect, useReducer } from 'react';

import { calculatorOperations } from '../utils';
import { calculatorReducer, initialState } from '../reducer';
import { EInputTypes } from '../types';

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleClick = (type: EInputTypes, payload?: string) => {
    if (payload) {
      dispatch({ type, payload });
    } else {
      dispatch({ type, payload: null });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
      dispatch({
        type: EInputTypes.inputDigit,
        payload: e.key,
      });
    } else if (e.key in calculatorOperations) {
      e.preventDefault();
      dispatch({
        type: EInputTypes.performOperation,
        payload: e.key,
      });
    } else if (e.key === ',') {
      e.preventDefault();
      dispatch({
        type: EInputTypes.inputDot,
      });
    } else if (e.key === '.') {
      e.preventDefault();
      dispatch({
        type: EInputTypes.inputDot,
      });
    } else if (e.key === '%') {
      e.preventDefault();
      dispatch({
        type: EInputTypes.inputPercent,
      });
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      dispatch({
        type: EInputTypes.clearLastChar,
      });
    } else if (e.key === 'Clear') {
      e.preventDefault();

      if (state.displayValue !== '0') {
        dispatch({
          type: EInputTypes.clearDisplay,
        });
      } else {
        dispatch({
          type: EInputTypes.clearAll,
        });
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return { state, handleClick };
};
