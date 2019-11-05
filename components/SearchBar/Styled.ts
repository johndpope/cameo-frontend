import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import theme from '../../utils/theme'

export const Container = styled.div `
  position: relative;
  width: 97%;
  background: ${theme.colors.white};
  height: 72px;
  display: flex;
  margin-top: 83px;
  box-shadow: 0 1px 13px -4px hsla(0,0%,58%,.26);
  border: 1px solid hsla(0,0%,59.2%,.15);

  .icon {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 23px;
    padding-left: 15px;
    padding-right: 10px;
    svg {
      font-size: 36px;
      color: ${theme.colors.red};
    }
  }
`

export const Text = styled.input`
  color: ${theme.colors.grey};
  font-size: 24px;
  padding-top: 34px;
  padding-bottom: 20px;
  box-shadow: inset 0 -1px 0 ${theme.colors.darkGrey};
  width: 100%;
  padding-left: 60px;

  :focus {
    outline: none;
    box-shadow: inset 0 -2px 0 ${theme.colors.blue};
  }
`;