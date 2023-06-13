import styled from 'styled-components'
import { colors } from 'src/utils/colors'
import { SIDEBAR_WIDTH } from './utils'

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #f0f0f0;
  padding: 20px;
  overflow-y: auto;

  background-color: ${colors.secondary};
`

export const MainWrapper = styled.div`
  width: 100vw-${SIDEBAR_WIDTH + 40}px;
  margin-left: ${SIDEBAR_WIDTH + 40}px;
  margin-top: 60px;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  gap: 5px;
  padding-left: ${SIDEBAR_WIDTH}px;
  padding-right: 40px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`
