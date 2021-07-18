import React, { FC } from 'react';
import './CalculatorKey.scss';

interface ICalculatorKeyProps {
  keyValue: string | number;
  onClick: () => void;
  className?: string;
}

export const CalculatorKey: FC<ICalculatorKeyProps> = ({ onClick, className, keyValue }) => (
  <button className={`calculator-key ${className}`} type="button" onClick={onClick}>
    {keyValue}
  </button>
);
