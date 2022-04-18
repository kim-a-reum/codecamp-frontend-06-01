import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 750px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const HIDDEN_HEADERS = ["/12-04-state-prev"];

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const isHidden = HIDDEN_HEADERS.includes(router.asPath);
  // 이게 현재 주소인데요 그게 저 ^여기 포함되어있으면(isHidden이 true면) 숨겨주세요 //

  return (
    <>
      {!isHidden && <LayoutHeader />}
      {/* ishidden이 false면 보여주자 !가 있으니까 !   */}
      {/* <LayoutBanner /> */}
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
