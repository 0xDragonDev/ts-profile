import styled, { css } from 'styled-components'

type ContainerProps = {
  active?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);

  &[data-state='#about'] {
    height: 458px;
  }

  &[data-state='#contact'] {
    height: 422px;
  }

  &[data-state='#experience'] {
    height: 555px;
  }
`

type ContentProps = {
  active?: boolean
}

export const Content = styled.div<ContentProps>`
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;

  ${({ active }) =>
    active &&
    css`
      padding-top: 0;
    `}
`
