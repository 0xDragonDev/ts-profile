import styled, { css } from 'styled-components'

type SectionProps = {
  active?: boolean
}

export const Section = styled.div<SectionProps>`
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: block;
      animation: fadeIn 0.6s both;
    `}

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translatey(40px);
    }
    100% {
      opacity: 1;
    }
  }
`
