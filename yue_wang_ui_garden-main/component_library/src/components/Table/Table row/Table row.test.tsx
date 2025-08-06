import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './Table row';
import { TableCell } from '../Table cell/Table cell';

describe('TableRow component', () => {
  it('is visible when rendered', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <TableRow>
            <TableCell content="Cell 1" />
            <TableCell content="Cell 2" />
          </TableRow>
        </tbody>
      </table>
    );
    expect(getByText('Cell 1')).toBeVisible();
    expect(getByText('Cell 2')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow disabled>
            <TableCell content="Cell 1" />
            <TableCell content="Cell 2" />
          </TableRow>
        </tbody>
      </table>
    );
    const tr = container.querySelector('tr');
    expect(tr).toHaveStyle('background-color: #ccc');
    expect(tr).toHaveStyle('cursor: not-allowed');
  });
});
