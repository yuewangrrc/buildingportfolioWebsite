import React from 'react';
import styled from 'styled-components';
import type { TextProps } from './Text.types';

const StyledText = styled.p<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 8px;
  font-size: 16px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? '#666' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledText backgroundColor={backgroundColor} disabled={disabled}>
      {content}
    </StyledText>
  );
};
