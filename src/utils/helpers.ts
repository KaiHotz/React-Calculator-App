import { Digits, CalculatorOperations } from '../types';

export const digitKeys: Digits[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export const calculatorOperations: CalculatorOperations = {
  '/': {
    name: 'divide',
    symbol: '÷',
    func: (prevValue: number, nextValue: number) => prevValue / nextValue,
  },
  '*': {
    name: 'multiply',
    symbol: '×',
    func: (prevValue: number, nextValue: number) => prevValue * nextValue,
  },
  '-': {
    name: 'subtract',
    symbol: '−',
    func: (prevValue: number, nextValue: number) => prevValue - nextValue,
  },
  '+': {
    name: 'add',
    symbol: '+',
    func: (prevValue: number, nextValue: number) => prevValue + nextValue,
  },
  '=': {
    name: 'equals',
    symbol: '=',
    func: (_prevValue: number, nextValue: number) => nextValue,
  },
  'Enter': {
    name: 'enter',
    symbol: '=',
    func: (_prevValue: number, nextValue: number) => nextValue,
  },
};

export const getFormattedValue = (value: string): string => {
  const language = navigator.language || 'en-US';

  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  });

  const match = /\.\d*?(0*)$/.exec(value);

  if (match) {
    formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
  }

  return formattedValue.length >= 14 ? parseFloat(value).toExponential().toString() : formattedValue;
};
