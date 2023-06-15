import styled from 'styled-components'

import { colors } from 'src/utils/colors'

export const CardWrapper = styled.div`
  background: ${colors.secondary};
  border-radius: 12px;
  padding: 20px;
  width: fit-content;
  min-width: 400px;
`

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 20px;
  max-width: calc(100vw - 90px);
  margin: 0 auto;
`
