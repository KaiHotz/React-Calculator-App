import React from 'react';
import _ from 'lodash';
import { CalculatorDisplay } from '../CalculatorDisplay';
import { CalculatorKey } from '../CalculatorKey';
import { calculatorOperations, digitKeys } from '../../utils/helpers';
import { useCalculator } from '../../hooks/useCalculator';
import { EInputTypes } from '../../types';
import './Calculator.scss';

export const Calculator = () => {
  const { state, handleClick } = useCalculator();

  return (
    <div className="calculator">
      <CalculatorDisplay value={state.displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey
              className="key-clear"
              onClick={() => handleClick(state.displayValue !== '0' ? EInputTypes.clearDisplay : EInputTypes.clearAll)}
              keyValue={state.displayValue !== '0' ? 'C' : 'AC'}
            />
            <CalculatorKey className="key-sign" onClick={() => handleClick(EInputTypes.toggleSign)} keyValue="±" />
            <CalculatorKey className="key-percent" onClick={() => handleClick(EInputTypes.inputPercent)} keyValue="%" />
          </div>
          <div className="digit-keys">
            {digitKeys.map((digit) => (
              <CalculatorKey
                key={`key-${digit}`}
                className={`key-${digit}`}
                onClick={() => handleClick(EInputTypes.inputDigit, digit)}
                keyValue={digit}
              />
            ))}
            <CalculatorKey className="key-dot" onClick={() => handleClick(EInputTypes.inputDot)} keyValue="●" />
          </div>
        </div>
        <div className="operator-keys">
          {_.map(calculatorOperations, (value, key) => (
            <CalculatorKey
              key={`key-${value.name}`}
              className={`key-${value.name}`}
              onClick={() => handleClick(EInputTypes.performOperation, key)}
              keyValue={value.symbol}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
