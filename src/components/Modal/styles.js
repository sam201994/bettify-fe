import styled from 'styled-components'

export const DialogWrapper = styled.div`
  background: #282828;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

/* ------ CUSTOM WRAPPERS ------ */

export const CreateBetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .top-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .section-1 {
    display: flex;
    gap: 20px;
  }
`

export const DeclareWinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .top-section {
    display: flex;
    flex-direction: column;
  }
`

export const WithdrawBetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .top-section {
    display: flex;
    flex-direction: column;
  }
`

export const PlaceBetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
