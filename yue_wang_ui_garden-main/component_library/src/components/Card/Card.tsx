import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Wrapper = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  border-radius: 8px;
  padding: 16px;
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 2px 8px rgba(0,0,0,0.1)'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, onClick }) =>
    disabled ? 'not-allowed' : onClick ? 'pointer' : 'default'};
  user-select: none;
  max-width: 400px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const Content = styled.div`
  margin-bottom: 8px;
`;

const Footer = styled.div`
  font-size: 0.875rem;
  color: #555;
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  disabled,
  backgroundColor,
  onClick,
}) => {
  return (
    <Wrapper
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
      data-testid="card"
    >
      <Title>{title}</Title>
      <Content>{content}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
};
