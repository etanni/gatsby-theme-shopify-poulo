import styled from '@emotion/styled';
import { IoIosClose } from 'react-icons/io';

import { layout } from '../../components/tokens';

const sidebarWidth = 280;
const sidebarDesktopWidth = 400;

interface ScreenProps {
  active: string;
}

export const Wrapper = styled.div<ScreenProps>`
  display: grid;
  grid-template-columns: ${sidebarWidth}px 1fr ${sidebarWidth}px;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: calc(100vw + ${sidebarWidth * 2}px);
  ${({ active }) => {
    if (active === 'left') return 'left: 0;';
    if (active === 'right') return `left: -${sidebarWidth * 2}px;`;
    return `left: -${sidebarWidth}px;`;
  }};
  transition: left 0.33s ease;
  @media (min-width: 600px) {
    grid-template-columns: ${sidebarDesktopWidth}px 1fr ${sidebarDesktopWidth}px;
    width: calc(100vw + ${sidebarDesktopWidth * 2}px);
    ${({ active }: ScreenProps) => {
      if (active === 'left') return 'left: 0;';
      if (active === 'right') return `left: -${sidebarDesktopWidth * 2}px;`;
      return `left: -${sidebarDesktopWidth}px;`;
    }};
  }
`;

export const Main = styled.main<ScreenProps>`
  overflow: ${({ active }) => (active === 'main' ? 'auto' : 'hidden')};
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  position: relative;
`;

interface HeaderProps {
  transparentHeader?: boolean;
}

export const Header = styled.header<HeaderProps>`
  display: block;
  position: ${({ transparentHeader }) => (transparentHeader ? 'absolute' : 'relative')};
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: scroll;
  scroll-behavior: smooth;
`;

export const Overlay = styled.div<ScreenProps>`
  position: absolute;
  cursor: pointer;
  left: ${sidebarWidth}px;
  top: 0;
  width: ${({ active }) => (active === 'main' ? '0' : '100vw')};
  height: ${({ active }) => (active === 'main' ? '0' : '100vh')};
  background-color: ${({ active }: ScreenProps) => (active === 'main' ? 'transparent' : 'rgba(0, 0, 0, 0.35)')};
  transition: background-color 0.3s ease-in;
  z-index: 2;
  @media (min-width: 600px) {
    left: ${sidebarDesktopWidth}px;
  }
`;

const CloseIcon = styled(IoIosClose)`
  position: absolute;
  cursor: pointer;
  top: ${layout.spacing * 1.5}px;
  z-index: 10;
  color: white;
`;

export const LeftCloseIcon = styled(CloseIcon)`
  left: ${sidebarWidth}px;
  @media (min-width: 600px) {
    left: ${sidebarDesktopWidth}px;
  }
`;

export const RightCloseIcon = styled(CloseIcon)`
  right: ${sidebarWidth}px;
  @media (min-width: 600px) {
    right: ${sidebarDesktopWidth}px;
  }
`;
