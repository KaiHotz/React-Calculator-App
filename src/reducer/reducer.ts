import { calculatorOperations } from '../utils/helpers';
import { ICalculaterState, EInputTypes, OperactionKeys } from '../types';

export interface IInputDigit {
  type: EInputTypes.inputDigit;
  payload: string | null;
}

export interface IInputDot {
  type: EInputTypes.inputDot;
}

export interface IInputPercent {
  type: EInputTypes.inputPercent;
}

export interface IToggleSign {
  type: EInputTypes.toggleSign;
}

export interface IClearLastChar {
  type: EInputTypes.clearLastChar;
}

export interface IClearDisplay {
  type: EInputTypes.clearDisplay;
}

export interface IPerformOperation {
  type: EInputTypes.performOperation;
  payload: number | string | null;
}

export interface IClearAll {
  type: EInputTypes.clearAll;
}
export const initialState: ICalculaterState = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForOperand: false,
};

export const calculatorReducer = (
  state: ICalculaterState,
  action: IInputDigit | IInputDot | IInputPercent | IToggleSign | IClearLastChar | IClearDisplay | IPerformOperation | IClearAll,
) => {
  switch (action.type) {
    case EInputTypes.inputDigit: {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: `${action.payload}`,
          waitingForOperand: false,
        };
      }

      return {
        ...state,
        displayValue: state.displayValue === '0' ? `${action.payload}` : `${state.displayValue}${action.payload}`,
      };
    }
    case EInputTypes.inputDot: {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: '0.',
          waitingForOperand: false,
        };
      }

      return {
        ...state,
        displayValue: `${state.displayValue}.`,
        waitingForOperand: false,
      };
    }

    case EInputTypes.inputPercent: {
      if (state.displayValue !== '0') {
        const fixedDigits: string = state.displayValue.replace(/^-?\d*\.?/, '');
        const newValue: number = parseFloat(state.displayValue) / 100;

        return {
          ...state,
          displayValue: `${newValue.toFixed(fixedDigits.length + 2)}`,
        };
      }

      return state;
    }

    case EInputTypes.toggleSign: {
      const newValue = parseFloat(state.displayValue) * -1;

      return {
        ...state,
        displayValue: `${newValue}`,
      };
    }

    case EInputTypes.clearLastChar:
      return {
        ...state,
        displayValue: state.displayValue.substring(0, state.displayValue.length - 1) || '0',
      };

    case EInputTypes.clearDisplay:
      return {
        ...state,
        displayValue: '0',
      };

    case EInputTypes.performOperation: {
      const inputValue = parseFloat(state.displayValue);

      if (state.value === null) {
        return {
          ...state,
          value: inputValue,
          operator: action.payload,
          waitingForOperand: true,
        };
      }

      if (state.operator) {
        const currentValue = state.value || 0;
        const newValue = calculatorOperations[state.operator as OperactionKeys].func(currentValue, inputValue);

        return {
          value: newValue,
          displayValue: `${newValue}`,
          operator: action.payload,
          waitingForOperand: true,
        };
      }

      return {
        ...state,
        operator: action.payload,
        waitingForOperand: false,
      };
    }

    case EInputTypes.clearAll:
      return initialState;

    default:
      return initialState;
  }
};
