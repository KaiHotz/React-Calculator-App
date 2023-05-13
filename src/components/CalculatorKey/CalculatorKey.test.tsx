import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorKey } from './CalculatorKey';

const baseProps = {
  onClick: vi.fn(),
  keyValue: '1',
};

describe('<Button />', () => {
  it('should render', () => {
    render(<CalculatorKey {...baseProps} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it('should call onClick', () => {
    render(<CalculatorKey {...baseProps} />);
    fireEvent.click(screen.getByTestId('calculator-key'));

    expect(baseProps.onClick).toHaveBeenCalled();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    render(<CalculatorKey {...props} />);

    const element = screen.getByTestId('calculator-key');

    expect(element).toHaveClass(props.className);
  });
});
