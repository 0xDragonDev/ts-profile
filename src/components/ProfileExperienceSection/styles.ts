import styled from 'styled-components'

export const Timeline = styled.div`
  margin-top: 30px;
  position: relative;

  &:after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgba(81, 106, 204, 1) 100%
    );
    content: '';
    left: 12px;
    width: 2px;
    top: 4px;
    height: 100%;
    position: absolute;
    content: '';
  }
`

export const Item = styled.div`
  position: relative;
  padding-left: 30px;
  padding-right: 20px;
  padding-bottom: 20px;
  z-index: 1;

  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: '';
    width: 10px;
    position: absolute;
    top: 4px;
    left: 7px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: #868686;
    background-color: #516acc;
  }
`

export const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`

export const ItemPeriod = styled.div`
  font-weight: 300;
  font-size: 12px;
  color: #6f6f7b;
  margin-bottom: 5px;
`

export const ItemDesc = styled.div`
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
`
