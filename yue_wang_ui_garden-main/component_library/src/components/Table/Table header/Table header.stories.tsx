import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './Table header';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    title: 'Table Header',
    backgroundColor: '#333',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Header',
    backgroundColor: '#333',
    disabled: true,
  },
};
