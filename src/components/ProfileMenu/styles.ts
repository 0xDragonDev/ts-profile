import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;
`

type ButtonProps = {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  flex: 1 1 auto;
  user-select: none;
  background: 0;
  font-size: 13px;
  border: 0;
  padding: 15px 5px;
  cursor: pointer;
  color: #5c5c6d;
  transition: 0.3s;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  outline: 0;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #2b2c48;
    border-bottom: 3px solid #8a84ff;
    background: linear-gradient(
      to bottom,
      rgba(127, 199, 231, 0) 0%,
      rgba(207, 204, 255, 0.2) 44%,
      rgba(211, 226, 255, 0.4) 100%
    );
  }

  ${({ active }) =>
    active &&
    css`
      color: #2b2c48;
      border-bottom: 3px solid #8a84ff;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.2) 44%,
        rgba(211, 226, 255, 0.4) 100%
      );
    `}
`
