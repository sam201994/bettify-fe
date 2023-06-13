import styled from 'styled-components'
import { colors } from 'src/utils/colors'

export const CardWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 12px;
  padding: 20px;
  width: fit-content;
`

export const CardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 50px;
  .top-section {
    gap: 5px;
    display: flex;
    flex-direction: column;
    .title-section {
      display: flex;
      justify-content: space-between;
      span:first-child {
        width: 300px;
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
    flex-direction: column;
    gap: 20px;
    .button-section {
      display: flex;

      gap: 15px;
    }
  }
`

export const DateWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  .date-section {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .winner-section {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 3px;
  }
`
