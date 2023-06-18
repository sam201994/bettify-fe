import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const Gola = styled.div`
  background-color: ${(props) => colors[props.color]};
  border-radius: 100%;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};
  display: flex;
`

export const NameAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    align-items: center;
    display: flex;
  }
`
