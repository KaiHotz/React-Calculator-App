export type Digits = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
export type OperactionKeys = '/' | '*' | '-' | '+' | '=' | 'Enter';
export type OperationNames = 'divide' | 'multiply' | 'subtract' | 'add' | 'equals' | 'enter';
export type OperationSymbols = '÷' | 'x' | '-' | '+' | '=';
export interface CalculatorValues {
  name: OperationNames;
  symbol: OperationSymbols;
  show: boolean;
  func: (prevValue: number, nextValue: number) => number;
}

export interface ICalculaterState {
  value: number | null;
  displayValue: string;
  operator: string | number | null;
  waitingForOperand: boolean;
}

export type CalculatorOperations = {
  [key in OperactionKeys]: CalculatorValues;
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
