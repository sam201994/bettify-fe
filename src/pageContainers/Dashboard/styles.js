import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const HeaderContrainer = styled.div``

export const CardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  height: 100%;
`

export const BodyWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  .stats-section-1 {
    display: flex;
    gap: 20px;
  }
  .stats-section-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const StatsCardWrapper = styled.div`
  background: #e2972f;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  flex: 1;
`

export const TableWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 8px;
  padding: 20px;
`
