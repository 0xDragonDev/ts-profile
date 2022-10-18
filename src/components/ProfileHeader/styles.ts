import styled, { css } from 'styled-components'

type HeaderProps = {
  active?: boolean
}

export const Header = styled.div<HeaderProps>`
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }

  ${({ active }) =>
    active &&
    css`
      height: 80px;
    `}
`

type CoverProps = {
  active?: boolean
}

export const Cover = styled.div<CoverProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;

  ${({ active }) =>
    active &&
    css`
      height: 100px;
      top: -50px;
    `}
`

type AvatarProps = {
  active?: boolean
}

export const Avatar = styled.img<AvatarProps>`
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);

  ${({ active }) =>
    active &&
    css`
      transform: none;
      left: 20px;
      width: 50px;
      height: 50px;
      bottom: 10px;
    `}
`

type FullnameProps = {
  active?: boolean
}

export const Fullname = styled.h1<FullnameProps>`
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;

  ${({ active }) =>
    active &&
    css`
      left: 86px;
      transform: none;
      bottom: 28px;
      font-size: 19px;
    `}
`

type JobtitleProps = {
  active?: boolean
}

export const Jobtitle = styled.h2<JobtitleProps>`
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(7px);

  ${({ active }) =>
    active &&
    css`
      left: 86px;
      transform: none;
      bottom: 15px;
      letter-spacing: 1px;
      font-size: 10px;
    `}
`
