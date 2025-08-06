import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  border-collapse: collapse;
  width: 100%;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Table = ({ children, disabled, backgroundColor }: TableProps) => {
  return (
    <StyledTable
      data-testid="table"
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledTable>
  );
};
