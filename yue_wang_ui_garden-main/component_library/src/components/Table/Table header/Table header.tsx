import React from 'react';
import styled from 'styled-components';
import type { TableHeaderProps } from './Table header.types';

const StyledTh = styled.th<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#333'};
  color: white;
  padding: 12px;
  text-align: left;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledTh backgroundColor={backgroundColor} disabled={disabled}>
      {title}
    </StyledTh>
  );
};
