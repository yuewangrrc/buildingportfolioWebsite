import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text component', () => {
  it('should render and be visible', () => {
    const { getByText } = render(<Text content="Test text" />);
    expect(getByText('Test text')).toBeVisible();
  });

  it('should have grey background when disabled', () => {
    const { getByText } = render(
      <Text content="Disabled text" backgroundColor="#fff" disabled />
    );
    expect(getByText('Disabled text')).toHaveStyle('background-color: #ccc');
  });
});
