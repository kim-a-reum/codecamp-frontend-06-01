import axios from "axios";
export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 131 (랜덤숫자)
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종 결과값!!!
        });
      });
    });
  };
  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res: any) => {
        // 여기에 로직이 들어감
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res: any) => {
        const userId = res.data.UserId;
        console.log(userId); // 여기까지 잘 뜬다!!!
        axios.get(`http://koreanjson.com/posts?userId=${userId}`); // 주소도 들어가진다..
      })
      .then((res: any) => {
        console.log(res); // 왜 undefined가 뜨지 ㅠㅠ ㅠㅠ
      });
  };
  const onClickAsyncawait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const bbb = await axios.get(`http://koreanjson.com/posts/${aaa}`);

    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${bbb}`);
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>
      <br />

      <button onClick={onClickPromise}>Promise 요청하기!!</button>
      <br />

      <button onClick={onClickAsyncawait}>Asyncawait 요청하기!!</button>
      <br />
    </div>
  );
}
