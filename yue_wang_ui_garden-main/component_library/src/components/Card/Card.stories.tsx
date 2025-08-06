import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'Card information',
    footer: 'Card footer',
    disabled: false,
    backgroundColor: '#fff',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'Card information',
    footer: 'Card footer',
    disabled: true,
    backgroundColor: '#fff',
  },
};
