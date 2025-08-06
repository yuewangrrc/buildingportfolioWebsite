import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: { disable: true } },
    selectedValue: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options,
    selectedValue: '1',
    disabled: false,
    backgroundColor: '#fff',
  },
};

export const Disabled: Story = {
  args: {
    options,
    selectedValue: '1',
    disabled: true,
    backgroundColor: '#fff',
  },
};
