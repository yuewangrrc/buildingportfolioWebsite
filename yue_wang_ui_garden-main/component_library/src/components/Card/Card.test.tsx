import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card component', () => {
  it('is visible when rendered', () => {
    const { getByTestId } = render(
      <Card title="Test Card" content="Test content" />
    );
    expect(getByTestId('card')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByTestId } = render(
      <Card title="Disabled Card" content="Test content" disabled />
    );
    const card = getByTestId('card');
    expect(card).toHaveStyle('background-color: #ccc');
    expect(card).toHaveStyle('cursor: not-allowed');
  });
});
