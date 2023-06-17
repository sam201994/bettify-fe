import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 10px 10px;
  filter: ${(props) =>
    props.disabled ? 'brightness(40%)' : 'brightness(100%)'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  background: ${(props) => (props.disabled ? colors.darkGrey : colors.black)};
  height: 40px;
  width: 100%;
`

export const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  filter: ${(props) =>
    props.disabled ? 'brightness(40%)' : 'brightness(100%)'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`
