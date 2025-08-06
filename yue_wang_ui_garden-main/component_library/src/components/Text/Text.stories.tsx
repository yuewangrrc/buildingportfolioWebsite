import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'Text content',
    backgroundColor: 'transparent',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Text',
    backgroundColor: '#f0f0f0',
    disabled: true,
  },
};
