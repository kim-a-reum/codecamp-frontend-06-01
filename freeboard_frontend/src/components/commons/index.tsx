import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_HEADERS = ["/"];

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
      <LayoutBanner />
      <LayoutNavigation /> 
      </div>
      }
      
      
      <Body>{props.children}</Body>
      </>
     
  );
}
