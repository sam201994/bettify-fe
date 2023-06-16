import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const DialogWrapper = styled.div`
  background: #282828;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  min-width: 400px;
`

// Place bet Modal

export const InputWrapper = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.dullGrey};

  justify-content: space-between;
  .left-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
  }
  .right-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const TextInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  border: 0;
  color: white;
  font-size: 24px;
  font-weight: 500;
  &::placeholder {
    color: ${colors.dullGrey};
  }

  &:focus {
    outline: none;
  }
`

export const WithdrawBetBodyWrapper = styled.div``
