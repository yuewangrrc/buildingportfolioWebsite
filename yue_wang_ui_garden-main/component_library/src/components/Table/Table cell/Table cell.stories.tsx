import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './Table cell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    content: 'Table Cell',
    backgroundColor: '#fff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Cell',
    backgroundColor: '#fff',
    disabled: true,
  },
};
