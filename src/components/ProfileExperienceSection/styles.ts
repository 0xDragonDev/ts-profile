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
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: '';
  }
`

export const Item = styled.div`
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;

  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
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

export const ItemDesc = styled.div`
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
`
