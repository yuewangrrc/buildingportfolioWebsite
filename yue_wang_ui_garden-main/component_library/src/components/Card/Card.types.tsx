import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  content: ReactNode;
  footer?: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}
