import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './Table header';

describe('TableHeader component', () => {
  it('is visible when rendered', () => {
    const { getByText } = render(<TableHeader title="Header Title" />);
    expect(getByText('Header Title')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByText } = render(
      <TableHeader title="Disabled Header" disabled />
    );
    const header = getByText('Disabled Header');
    expect(header).toHaveStyle('background-color: #ccc');
    expect(header).toHaveStyle('cursor: not-allowed');
  });
});
