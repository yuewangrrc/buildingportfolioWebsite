import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './Radio button';

describe('RadioButton component', () => {
  it('is visible when rendered', () => {
    const { getByLabelText } = render(
      <RadioButton label="Option 1" name="group" value="1" />
    );
    expect(getByLabelText('Option 1')).toBeVisible();
  });

  it('has disabled cursor and opacity when disabled', () => {
    const { getByLabelText } = render(
      <RadioButton label="Option 1" name="group" value="1" disabled />
    );
    const radio = getByLabelText('Option 1');
    const wrapper = radio.closest('label');

    expect(wrapper).toHaveStyle('cursor: not-allowed');
    expect(wrapper).toHaveStyle('opacity: 0.6');
  });
});
