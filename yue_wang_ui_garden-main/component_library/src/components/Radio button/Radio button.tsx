import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './Radio button.types';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <Wrapper disabled={disabled}>
      <StyledRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </Wrapper>
  );
};
