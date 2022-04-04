// 1.어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    var answer = 0;
    for(i=0; i<signs.length; i++){
        // if(signs[i] === true){
        //     answer += absolutes[i]
        // } else {
        //     answer += -absolutes[i]
        // }
        signs[i] ? answer+= absolutes[i] : answer += -absolutes[i]
    }
    return answer;
}
// 2.문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
    let answer = false
    let num = String(x).split("")
    let sum = 0;
    for(i=0; i<num.length; i++){
        
        sum += Number(num[i])
    }
 if(x%sum === 0){
    return answer = true
 } else{
     return answer
 }

}