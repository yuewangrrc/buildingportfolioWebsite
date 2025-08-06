import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img component', () => {
  it('is visible when rendered', () => {
    const { getByAltText } = render(<Img src="test.png" alt="Test image" />);
    expect(getByAltText('Test image')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByTestId } = render(
      <Img src="test.png" alt="Disabled image" disabled />
    );
    const img = getByTestId('image');
    expect(img).toHaveStyle('background-color: #ccc');
    expect(img).toHaveStyle('cursor: not-allowed');
  });
});
