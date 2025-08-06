import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './Table footer';
import { TableRow } from '../Table row/Table row';
import { TableCell } from '../Table cell/Table cell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: false,
    children: (
      <TableRow>
        <TableCell content="Table Footer 1" />
        <TableCell content="Table Footer 2" />
        <TableCell content="Table Footer 3" />
      </TableRow>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: true,
    children: (
      <TableRow>
        <TableCell content="Disabled Footer" />
        <TableCell content="Disabled Footer" />
        <TableCell content="Disabled Footer" />
      </TableRow>
    ),
  },
};
