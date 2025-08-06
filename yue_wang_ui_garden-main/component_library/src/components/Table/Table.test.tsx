import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table component', () => {
  it('is visible when rendered', () => {
    const { getByTestId } = render(
      <Table>
        <tbody>
          <tr>
            <td>Test Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(getByTestId('table')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByTestId } = render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Disabled Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    const table = getByTestId('table');
    expect(table).toHaveStyle('background-color: #ccc');
    expect(table).toHaveStyle('cursor: not-allowed');
  });
});
