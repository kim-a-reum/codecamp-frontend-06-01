import LazyLoad from "react-lazyload";
import { useEffect, useRef, useState } from "react";

export default function LazyloadPreloadPage() {
  const images = [
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
    "../../picture/루피공항도둑.png",
  ];
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  return (
    <>
      <div>
        {images.map((el, idx) => (
          <LazyLoad key={idx} height={500}>
            <img src={el} />
          </LazyLoad>
        ))}
      </div>
      <div>
        <button onClick={onClickPreload}>이미지 프리로드</button>
        <div ref={divRef}></div>
      </div>
    </>
  );
}
