import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.header `
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.pageBg};
  transition: padding 300ms ease;
  z-index: 99;

  img {
    margin-bottom: 0px;
  }

  .logo {
    display: flex;

    .logoCaption{
      border-bottom: 2px solid #fa005c;
      font-size: 18px;
      font-weight: 600;
      margin-left: 20px;
      cursor: pointer;
    }
  }

  &.sticky {
    padding: 20px 20px;
    background-color: ${theme.colors.greyishWhite};
  }

  .nav div {
    display: inline;
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding-bottom: 5px;

    :last-child {
        margin-right: 0;
    }

    :hover {
      border-bottom: 2px solid ${theme.colors.red};
      cursor: pointer;
    }
  }
`
