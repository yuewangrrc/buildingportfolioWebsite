import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './Table footer';
import { TableRow } from '../Table row/Table row';
import { TableCell } from '../Table cell/Table cell';

describe('TableFooter component', () => {
  it('is visible when rendered', () => {
    const { getByText } = render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell content="Footer Cell" />
          </TableRow>
        </TableFooter>
      </table>
    );
    expect(getByText('Footer Cell')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { container } = render(
      <table>
        <TableFooter disabled>
          <TableRow>
            <TableCell content="Disabled Footer Cell" />
          </TableRow>
        </TableFooter>
      </table>
    );
    const tfoot = container.querySelector('tfoot');
    expect(tfoot).toHaveStyle('background-color: #ccc');
    expect(tfoot).toHaveStyle('cursor: not-allowed');
  });
});
