import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label component', () => {
  it('is visible when rendered', () => {
    const { getByText } = render(<Label text="Test Label" />);
    expect(getByText('Test Label')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByText } = render(<Label text="Disabled Label" disabled />);
    const label = getByText('Disabled Label');
    expect(label).toHaveStyle('background-color: #ccc');
    expect(label).toHaveStyle('cursor: not-allowed');
  });
});
