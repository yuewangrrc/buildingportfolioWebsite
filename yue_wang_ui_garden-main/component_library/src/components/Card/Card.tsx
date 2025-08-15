import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Wrapper = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || 'var(--surface)'};
  border-radius: var(--radius);
  padding: 18px;
  border: 1px solid #eef2f7;
  box-shadow: ${({ disabled }) => (disabled ? 'none' : 'var(--shadow-sm)')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'default')};
  user-select: none;
  max-width: 420px;
  transition: transform .12s ease, box-shadow .2s ease, border-color .2s ease;

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : 'var(--shadow-md)')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    border-color: #e3e9f2;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  color: #0f172a;
`;

const Content = styled.div`
  margin-bottom: 10px;
  color: #334155;
  line-height: 1.55;
`;

const Footer = styled.div`
  font-size: 0.9rem;
  color: #475569;
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
