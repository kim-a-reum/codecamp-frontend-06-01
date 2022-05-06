
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import NavigationPage from "./navigation";


const Body = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SideBody = styled.div`
  
  display: flex;
  flex-direction: column;
  
`;



interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  
  return (
    <div>
    
    
      <NavigationPage/>
    <LayoutSidebar></LayoutSidebar>


    <SideBody>

      
      <Body>{props.children}</Body>
    </SideBody>

    
    </div>
    
  );
}
