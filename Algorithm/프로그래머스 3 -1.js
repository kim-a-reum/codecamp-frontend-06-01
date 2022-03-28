// 1.대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s) {
  var answer = true;
  let count1 = 0;
  let count2 = 0;
  let str = s.toLowerCase();
  for (i = 0; i < s.length - 1; i++) {
    if (s[i] === "p") {
      count1 += 1;
    } else if (s[i] === "y") {
      count2 += 1;
    }
  }
  if (count1 !== count2) {
    answer = false;
  }
  return answer;
}

// 2.문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
  var answer = "";
  let idx = 0; //단어별로 인덱스를 구분하기 위한 변수
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      //공백을 만났을경우
      answer += s[i]; // " "
      idx = 0;
    } else {
      answer += idx % 2 === 1 ? s[i].toLowerCase() : s[i].toUpperCase();
      idx++;
    }
  }
  return answer;
}
