import styled from 'styled-components'
import { colors } from 'src/utils/colors'

export default styled.div`
  background-color: ${(props) => colors[props.color]};
  border-radius: 100%;
  width: 28px;
  height: 28px;
`
