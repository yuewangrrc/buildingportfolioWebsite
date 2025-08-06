import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <tbody>
        <tr>
          <td> Table </td>
        </tr>
      </tbody>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: true,
    children: (
      <tbody>
        <tr>
          <td> Disabled Table </td>
        </tr>
      </tbody>
    ),
  },
};
