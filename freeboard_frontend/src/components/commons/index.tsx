import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
`;
const SideBody = styled.div`
  
  display: flex;
  flex-direction: row;
  
`;

const HIDDEN_HEADERS = ["/","/signup"];

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    
    <>
      {!isHiddenHeader && 
      <div>
      <LayoutHeader />
      {/* <LayoutBanner /> */}
      <LayoutNavigation /> 
      </div>
      }

      <SideBody>
      {!isHiddenHeader && <LayoutSidebar></LayoutSidebar>}
      <Body>{props.children}</Body>
      </SideBody>
      </>
     
  );
}
