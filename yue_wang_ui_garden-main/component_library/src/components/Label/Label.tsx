import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.span<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  display: inline-block;
  padding: 4px 10px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#222'};
  color: white;
  font-size: 14px;
  border-radius: 3px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 3px 8px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
