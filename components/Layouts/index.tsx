import Navbar from "components/Navbar";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  hideNavbar?: boolean;
}
function Layout({ children, className, hideNavbar }: Props) {
  return (
    <>
      {!hideNavbar && <Navbar />}
      <ChildrenContainer className={className}>{children}</ChildrenContainer>
    </>
  );
}

export default Layout;

const ChildrenContainer = styled.div``;
