import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export default function LibraryYoutubePage() {
  const MyYoutube = styled(ReactPlayer)`
    border: 3px solid yellow;
  `;

  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={800}
        height={600}
      />
    </>
  );
}

{
  /* <MyYoutube
      url="https://www.youtube.com/watch?v=J1gRHosqoVA"
      width={800}
      height={600}
      muted={true}
      playing={true}
    // /> */
}
