import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './Hero Image.types';

const Wrapper = styled.div<{ height?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '300px'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ overlayColor }) => overlayColor || 'transparent'};
  opacity: 0.4;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayColor,
  disabled,
}) => {
  return (
    <Wrapper height={height} disabled={disabled}>
      <Img src={src} alt={alt} />
      {overlayColor && <Overlay overlayColor={overlayColor} />}
    </Wrapper>
  );
};
