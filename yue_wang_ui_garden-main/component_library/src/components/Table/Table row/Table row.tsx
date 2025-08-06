import React, { ReactElement } from 'react';
import styled from 'styled-components';
import type { TableRowProps } from './Table row.types';

const StyledTr = styled.tr<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  disabled,
}) => {
  const injectedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const typedChild = child as ReactElement<{
        backgroundColor?: string;
        disabled?: boolean;
      }>;
      return React.cloneElement(typedChild, { backgroundColor, disabled });
    }
    return child;
  });

  return (
    <StyledTr $backgroundColor={backgroundColor} $disabled={disabled}>
      {injectedChildren}
    </StyledTr>
  );
};
