import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
`;
const SideBody = styled.div`
  
  display: flex;
  flex-direction: column;
  
`;
const RealBody = styled.div`
  
  display: flex;
  flex-direction: row;
  
`;



interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  
  return (
    <div>
    
    <RealBody>
    <LayoutSidebar></LayoutSidebar>


     <SideBody>

      <LayoutBanner />
      
      <Body>{props.children}</Body>
     </SideBody>

    </RealBody>
    </div>
     
  );
}
