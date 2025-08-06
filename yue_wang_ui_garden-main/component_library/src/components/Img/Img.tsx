import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?: string }>`
  max-width: 100%;
  height: auto;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, onClick }) =>
    disabled ? 'not-allowed' : onClick ? 'pointer' : 'default'};
  display: block;
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled,
  onClick,
  backgroundColor,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      backgroundColor={backgroundColor}
      data-testid="image"
    />
  );
};
