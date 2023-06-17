import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const FallbackWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ButtonWrapper = styled.div`
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background: ${colors.lightGrey};
  padding: 16px;
`
