// 1. 문자열을 정수로 바꾸기 ;
function solution(s) {
    //     s = Number(s); 
    //     s를 숫자로 변환시켜서 담아줌 
    //     데이터를 직접 변경하지 말고 걍 담아주자! 
        // return Number(s);
        return +s; //문자열을 숫자열로 가볍게 +를 붙여서 바꿔줄수 있다 
        
    }
// 2. 같은 숫자는 싫어 
function solution(arr) {
    const answer = [];
    for(let i = 0 ; i< arr.length; i++)
    if( answer[answer.length -1] !== arr[i]){
        answer.push(arr[i])
    }
    return answer; 
}
//마지막데이터를 가져와서 비교해주는 방식 

//3. 핸드폰 번호 가리기 
function solution(phone_number) {
    let answer = "";
    for(let i = 0; i <phone_number.length; i++){
        if(i < phone_number.length-4){
            //뒷 4자리를 제외한 앞에 번호들을 가져온다 
        answer += "*";
        } else {

            answer += phone_number[i];
            //원래있는 숫자가 들어간다 
        }

    }  return answer;

}


// 2. 같은숫자는 싫어 
///배열의 크기라는 것은 배열안에 데이터 개수를 이야기한다
// function solution(arr)
// {
//     var answer = [];
//     for(i=1; i<arr.length; i++){
//     if(arr[i] !==arr[i+1] || arr[i] !==arr[i-1]){
//            answer.push("arr[i]")
//        } 
//         return answer
//     } }

// function solution(arr) {
//     const answer = [];
//     for(let i = 0 ; i< arr.length; i++)
//     if( answer[answer.length -1] !== arr[i]){
//         answer.push(arr[i])
//     }
//        return answer; 
//       }

function solution (arr){
    const answer = [];
    for(let i = 0 ; i< arr.length; i++){
      if(arr[i] === arr[i+1]){
        answer.push(arr[i])
      }
      
    }
    
    
  }