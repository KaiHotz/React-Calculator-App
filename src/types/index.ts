export type Digits = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
export type OperactionKeys = '/' | '*' | '-' | '+' | '=' | 'Enter';
export type OperationNames = 'divide' | 'multiply' | 'subtract' | 'add' | 'equals' | 'enter';
export type OperationSymbols = '÷' | '×' | '−' | '+' | '=';

export type CalculatorOperations = {
  [key in OperactionKeys]: {
    name: OperationNames;
    symbol: OperationSymbols;
    func: (prevValue: number, nextValue: number) => number;
  };
};

export enum EInputTypes {
  inputDigit = 'inputDigit',
  inputDot = 'inputDot',
  inputPercent = 'inputPercent',
  toggleSign = 'toggleSign',
  clearLastChar = 'clearLastChar',
  clearDisplay = 'clearDisplay',
  performOperation = 'performOperation',
  clearAll = 'clearAll',
}

export interface ICalculaterState {
  value: number | null;
  displayValue: string;
  operator: string | number | null;
  waitingForOperand: boolean;
}
