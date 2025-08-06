import React from 'react';
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#666' : '#000')};
  appearance: none;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onChange,
  disabled,
  backgroundColor,
}) => {
  return (
    <Select
      disabled={disabled}
      value={selectedValue}
      onChange={e => !disabled && onChange?.(e.target.value)}
      backgroundColor={backgroundColor}
      data-testid="dropdown"
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};
