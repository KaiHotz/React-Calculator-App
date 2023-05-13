import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calculator } from './Calculator';

describe('<Calculator />', () => {
  const user = userEvent.setup();
  it('should sum correctly', async () => {
    render(<Calculator />);

    await user.click(screen.getByText('6'));
    await user.click(screen.getByText('+'));
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('='));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('8');
  });

  it('should rest correctly', async () => {
    render(<Calculator />);
    await user.click(screen.getByText('6'));
    await user.click(screen.getByText('-'));
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('='));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('4');
  });

  it('should divide correctly', async () => {
    render(<Calculator />);
    await user.click(screen.getByText('6'));
    await user.click(screen.getByText('÷'));
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('='));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('3');
  });

  it('should multiply correctly', async () => {
    render(<Calculator />);
    await user.click(screen.getByText('6'));
    await user.click(screen.getByText('x'));
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('='));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('12');
  });

  it('should show decimals correctly', async () => {
    render(<Calculator />);

    await user.click(screen.getByText('●'));
    await user.click(screen.getByText('2'));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('0.2');
  });

  it('should invert sign correctly', async () => {
    render(<Calculator />);

    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('±'));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('-2');
  });

  it('should apply % correctly', async () => {
    render(<Calculator />);
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('%'));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('0.02');
  });

  it('should clear the display correctly', async () => {
    render(<Calculator />);
    await user.click(screen.getByText('1'));
    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('3'));
    await user.click(screen.getByText('C'));

    expect(screen.getByTestId('calculator-display-inner')).toHaveTextContent('0');
  });
});
