import { FC } from 'react';
import './CalculatorKey.scss';

interface ICalculatorKeyProps {
  keyValue: string | number;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const CalculatorKey: FC<ICalculatorKeyProps> = ({ onClick, className, keyValue, disabled }) => (
  <button
    className={`calculator-key ${className}`}
    type="button"
    onClick={onClick}
    disabled={disabled}
    data-testid="calculator-key"
  >
    {keyValue}
  </button>
);
