import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './Table cell';

describe('TableCell component', () => {
  it('is visible when rendered', () => {
    const { getByText } = render(<TableCell content="Test Cell" />);
    expect(getByText('Test Cell')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByText } = render(
      <TableCell content="Disabled Cell" disabled />
    );
    const cell = getByText('Disabled Cell');
    expect(cell).toHaveStyle('background-color: #ccc');
    expect(cell).toHaveStyle('cursor: not-allowed');
  });
});
