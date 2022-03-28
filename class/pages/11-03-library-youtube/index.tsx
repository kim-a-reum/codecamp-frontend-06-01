import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={700}
        height={500}
      />
      {/* //이 라이브러리 자체에 width 랑 heigh가 있기때문에 이것만 이 본태그 안에서 해주면 된다  */}
    </>
  );
}
