import { render, screen } from '@testing-library/react';
import { CalculatorDisplay } from './CalculatorDisplay';

describe('<CalculatorDisplay />', () => {
  it('should render', () => {
    render(<CalculatorDisplay value="111" />);
    expect(screen.getByText(/111/i)).toBeInTheDocument();
  });
});
