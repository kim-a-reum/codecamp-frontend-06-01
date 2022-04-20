import LayoutBanner from "./banner";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import NavigationPage from "./navigation";


const Body = styled.div`
  width: 1300px;
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

      <NavigationPage/>
      
      <Body>{props.children}</Body>
    </SideBody>

    </RealBody>
    </div>
    
  );
}
