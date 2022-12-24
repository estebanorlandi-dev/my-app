import Link from "next/link";
import styled, { css } from "styled-components";
import colors from "styles/colors";

export const NavbarContainer = styled.header`
  z-index: 9999;
  position: fixed;
  height: 100%;
  width: var(--nav-size);
  overflow: hidden;
  background-color: rgb(35, 35, 40);
  transition: width 0.15s ease;
  color: #fff;

  :hover {
    width: 15%;

    .label {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }

  &,
  .container {
    display: flex;
    flex-flow: column;
  }
`;

interface NavLinkProps {
  isActive: boolean;
}
export const NavLinkContainer = styled(Link)<NavLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
  width: max-content;

  .icon {
    --icon-size: var(--nav-size);
    min-width: var(--icon-size);
    min-height: var(--icon-size);
    padding: 1em;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
    font-size: 0.75em;
    font-weight: bold;

    transition: 0.25s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #${colors.hex.lightBlue};
      cursor: default;
    `}
`;
