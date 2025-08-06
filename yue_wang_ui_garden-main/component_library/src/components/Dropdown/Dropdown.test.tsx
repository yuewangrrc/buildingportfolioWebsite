import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'First Option', value: '1' },
  { label: 'Second Option', value: '2' },
];

describe('Dropdown component', () => {
  it('is visible when rendered', () => {
    const { getByTestId } = render(<Dropdown options={options} />);
    expect(getByTestId('dropdown')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByTestId } = render(<Dropdown options={options} disabled />);
    const dropdown = getByTestId('dropdown');
    expect(dropdown).toHaveStyle('background-color: #ccc');
    expect(dropdown).toHaveStyle('cursor: not-allowed');
  });
});
