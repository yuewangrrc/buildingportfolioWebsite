import React from 'react';
import styled from 'styled-components';
import type { TableFooterProps } from './Table footer.types';

const StyledTfoot = styled.tfoot<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  width: 100%;
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledTfoot $backgroundColor={backgroundColor} $disabled={disabled}>
      {children}
    </StyledTfoot>
  );
};
