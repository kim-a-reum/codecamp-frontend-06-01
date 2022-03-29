// 1.문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 나의 풀이
function solution(n) {
  var answer = [];
  let result = String(n).split("").reverse();

  for (i = 0; i < result.length; i++) {
    answer.push(Number(result[i]));
  }

  return answer;
}

// 2. array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

//나의 푸리
function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    } else if (arr[i] === arr[arr.length - 1] && answer.length === 0) {
      answer.push(-1);
    }
    answer = answer.sort((a, b) => {
      return a - b;
    });
  }

  return answer;
}
