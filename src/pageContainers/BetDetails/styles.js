import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const HeaderContrainer = styled.div``

export const BetsPlacedHeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 50px;
  width: 100%;
  gap: 20px;

  .button-section {
    width: 250px;
  }
`

export const TicketContainerWrapper = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`

export const TicketListWrapper = styled.div`
  border-top: 0.5px solid #beb9b963;

  border-bottom: 0.5px solid #beb9b963;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const DividerWrapper = styled.div`
  border-bottom: 0.5px solid #beb9b963;
`
