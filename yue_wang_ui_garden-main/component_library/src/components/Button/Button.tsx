import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 10px 18px;
  font-size: 15px;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: 999px;
  color: ${({ backgroundColor }) => (backgroundColor && backgroundColor.startsWith('#e2e8f0') ? '#0f172a' : '#ffffff')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#cbd5e1' : backgroundColor || 'var(--primary)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color .2s ease, box-shadow .2s ease, transform .06s ease;

  &:hover {
    background-color: ${({ backgroundColor, disabled }) =>
      disabled ? '#cbd5e1' : (backgroundColor && backgroundColor !== '#e2e8f0' ? 'var(--primary-600)' : '#dbe3ea')};
    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    box-shadow: var(--ring);
  }

  @media (max-width: 600px) {
    padding: 9px 16px;
    font-size: 14px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledButton>
  );
};

// changed styled button from const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>` to current to remove redundant error message
