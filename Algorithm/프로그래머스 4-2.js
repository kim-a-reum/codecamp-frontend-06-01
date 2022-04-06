// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

function solution(a, b) {
    var answer = 0;
    for(i=0; i<a.length; i++){
        answer += a[i]*b[i]
    }
    return answer;
}


// 두번째문제 못풀음 
// 2.정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// function solution(arr) {
//     var answer = [];
//     let result = [];
//     if(arr.length ===1 ){
//         answer = [-1]
//     } else {
//         for(i=0; i<arr.length; i++){
//           result += arr.sort((a,b)=>{
// 		return a-b
// 	})[i]            
//         } 
//      return result           
//     }
// }



function solution(arr) {
    var answer = [];
    let result = [];
    if(arr.length <2 ){
        return [-1]
    } else {
        for(i=1; i<arr.length; i++){
        result.push(arr.sort((a,b)=>{
		return a-b
	})[i])            
        } 
    return result.reverse()          
    }
}

// 이게 왜틀리지

function solution(arr){
    const answer=[];
    //1. 제일 작은수를 찾는다
    let min = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    //2. 제일 작은수를 제거 
    for(let i =0; i<arr.length; i++){
        if(arr[i]!==min){
            answer.push(arr[i]);
        }
    }
        //3. 배열이 비어있다면 -1를 채워서 리턴
    return answer.length === 0 ? [-1] : answer
}

//이게 멘토님의 풀이 1
