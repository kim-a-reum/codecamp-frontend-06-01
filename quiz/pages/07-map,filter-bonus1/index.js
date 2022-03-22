const classmates = [
    {name: "철수", age: 10, school : "토끼초등학교"},
      {name: "영이", age : 11, school : "다람쥐초등학교"},
    {name: "훈이", age : 9 , school : "토끼초등학교"}
  ]
  //1. 토끼초등학교만 골라낸후, candy : 10개씩 각각 추가해주세요
  classmates.filter((el)=>(el.school === "토끼초등학교")).map((el)=>({name:el.name, age: el.age, school : el.school , candy : "10개"}))
  
  
  //2. 다람쥐초등학교만 골라낸후, name뒤에 "어린이"를 붙여주세요
  classmates.filter((el)=>(el.school === "다람쥐초등학교")).map((el)=>({name: el.name + "어린이", age : el.age, school : el.school}))