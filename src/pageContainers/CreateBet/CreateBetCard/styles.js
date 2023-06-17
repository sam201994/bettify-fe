import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const CardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  height: 100%;
  justify-content: space-between;
  span:first-child {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
