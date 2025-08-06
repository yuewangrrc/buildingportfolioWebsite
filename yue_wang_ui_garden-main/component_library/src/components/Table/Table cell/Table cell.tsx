import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './Table cell.types';

const StyledTd = styled.td<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const TableCell: React.FC<TableCellProps> = ({
  content,
  backgroundColor,
  disabled,
}) => (
  <StyledTd $backgroundColor={backgroundColor} $disabled={disabled}>
    {content}
  </StyledTd>
);
