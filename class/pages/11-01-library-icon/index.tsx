import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(HeartOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return (
    <>
      <MyIcon />
    </>
  );
}
