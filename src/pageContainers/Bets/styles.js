import styled from 'styled-components'
import { colors } from 'src/utils/colors'

export const HeaderContrainer = styled.div``

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 12px;
  padding: 20px;
`

export const CardInnerWrapper = styled.div`
  cursor: pointer;
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

// export const CardWrapper = styled.div`
//   background: ${colors.secondary};
//   border-radius: 12px;
//   padding: 20px;
//   width: fit-content;
//   min-width: 400px;
// `

// export const CardListWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
//   grid-gap: 20px;
//   max-width: calc(100vw - 90px);
//   margin: 0 auto;
// `

export const DateWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  .date-section {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 175px;
  }
  .winner-section {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 3px;
  }
`
