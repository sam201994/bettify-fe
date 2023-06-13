import styled from 'styled-components'
import { colors } from 'src/utils/colors'

export const Gola = styled.div`
  background-color: ${(props) => colors[props.color]};
  border-radius: 100%;
  width: ${(props) => `${props.imgSize}px`};
  height: ${(props) => `${props.imgSize}px`};
  display: flex;
`

export const NameAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    align-items: center;
    display: flex;
  }
`
