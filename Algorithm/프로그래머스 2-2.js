// 1.정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd" ; }

    // 2. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
    function solution(arr) {
        var answer = 0;
        for(i=0;i<arr.length; i++){
        answer = (answer += arr[i] / arr.length) //이건 내가 생각한 방법이었는데 answer 자체에서 그냥 나누기를 했어도 되었음! 
    
        }  
        return answer;
    }

// 3.단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    var answer = '';
for(i=0;i<s.length;i++){
if(s.length  % 2 === 0){ 
 answer = s[s.length/2 - 1] + s[s.length/2]   
} else {
 answer = s[Math.floor(s.length/2)]
}    
}
return answer;}