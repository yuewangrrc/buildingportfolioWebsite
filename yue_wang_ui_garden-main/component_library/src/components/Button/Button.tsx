import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 10px 20px;
  font-size: 16px;

  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#007BFF'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    padding: 8px 16px;
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
