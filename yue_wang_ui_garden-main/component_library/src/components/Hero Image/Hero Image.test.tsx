import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './Hero Image';

describe('HeroImage component', () => {
  it('is visible when rendered', () => {
    const { getByAltText } = render(
      <HeroImage src="test.png" alt="Test hero image" />
    );
    expect(getByAltText('Test hero image')).toBeVisible();
  });

  it('has greyed-out style and disabled cursor when disabled', () => {
    const { getByAltText } = render(
      <HeroImage src="test.png" alt="Disabled hero image" disabled />
    );
    const imgWrapper = getByAltText('Disabled hero image').parentElement;
    expect(imgWrapper).toHaveStyle('opacity: 0.6');
    expect(imgWrapper).toHaveStyle('cursor: not-allowed');
  });
});
