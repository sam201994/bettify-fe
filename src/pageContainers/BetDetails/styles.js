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

export const BannerWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 12px;
  padding: 20px;
`

export const BannerInnerWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 50px;
  .top-section {
    gap: 10px;
    display: flex;
    flex-direction: column;
    .title-section {
      display: flex;
      justify-content: space-between;
      span:first-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .tag-section {
      display: flex;
      gap: 5px;
      height: 26px;
    }
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .right-section {
    display: flex;
    align-items: flex-end;
  }
  .left-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .owner-section {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 3px;
  }
`
