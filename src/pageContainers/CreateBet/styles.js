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
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`

export const CardWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 12px;
  padding: 20px;
`

export const CardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  height: 100%;
  justify-content: space-between;
  span:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
