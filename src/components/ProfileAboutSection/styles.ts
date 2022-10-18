import styled from 'styled-components'

export const Description = styled.p`
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
`

export const SocialLink = styled.a`
  color: #8797a1;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  background-color: rgba(93, 133, 193, 0.05);
  border-radius: 50%;
  margin-right: 10px;

  &:hover {
    svg {
      fill: darken(rgb(165, 181, 206), 20%);
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

export const SocialIcon = styled.svg`
  fill: rgb(165, 181, 206);
  width: 16px;
  display: block;
  transition: 0.3s;
`
