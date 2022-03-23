// 1.String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
    var answer = '';
    for(i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            answer = "김서방은 "+ i + "에 있다"
        }
    }
    return answer;
}

// 2.문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    var answer = true;
    for(i=0; i<s.length; i++){
        if(s[i] === "0"||s[i] === "1"||s[i] === "2"||
        s[i] === "3"||s[i] === "4"||s[i] === "5"||
        s[i] === "6"||s[i] === "7"||s[i] === "8"||s[i] === "9"){
        return answer
        } else {
            
            return false
        }
        
    }

}

// 3.정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
    var answer = 0;
    for(i=1; i<=n; i++){
        if(n%i === 0){
            answer += i
        }
    }
    return answer;
}