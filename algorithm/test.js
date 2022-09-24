// // 키 큰 친구 보이기
// function solution(arr) {
//   let answer = 1, // 처음엔 무조건 보이니까 1 넣고 시작
//     max = arr[0]; // 초기 친구가 가장 큰 친구
//   for (let i = 1; i < arr.length; i++) {
//     // 순찰
//     if (arr[i] > max) {
//       // 배열 돌면서 비교 트루시 ++ , 맥스 갱신
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));

실패코드;
function solution(arr) {
  let answer = [];
  let currentMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentMax) answer.push(arr[i + 1]);
    currentMax = arr[i];
  }

  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

// function solution(arr) {
//   let answer;

//   return answer;
// }

// let arr = [];
// console.log(solution(arr));

// function solution(arr) {
//   let answer;

//   return answer;
// }

// let arr = [];
// console.log(solution(arr));
