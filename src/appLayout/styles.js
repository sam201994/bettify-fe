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
  z-index: 4;
`

export const MainWrapper = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  display: flex;
  justify-content: space-between;
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
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  background-color: ${colors.primary};
  z-index: 3;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  margin-right: 40px;
  gap: 20px;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  padding-top: 45px;
  gap: 20px;
`

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cusor: pointer;
`
