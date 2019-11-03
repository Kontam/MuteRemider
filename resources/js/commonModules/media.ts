import { css } from 'styled-components';

const breakPoints = {
  PC: 'screen and (min-width: 768px)',
  Tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
  notMobile: 'screen and (min-width: 1024px)',
};

const media = {
  pc: (...args :any) => css`
    @media ${breakPoints.PC} {
      ${css(...args)}
    }`,
  tablet: (...args :any) => css`
    @media ${breakPoints.Tablet} {
      ${css(...args)}
    }`,
};

export default media;
