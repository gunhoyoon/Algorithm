// // 슬라이딩 윈도우 , for문 2개 , 시간복잡도 O(n)
// function solution(k, arr) {
//   let answer,
//     sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i]; // 첫번째 포문 : k까지 돌아서 1~3의 누적값 일단 구함
//     answer = sum; // answer에 바로 할당
//   }
//   for (let i = k; i < arr.length; i++) {
//     // i는 k부터 시작
//     sum += arr[i] - arr[i - k];
//     // 인덱스가 하나씩 증가하면서 추가된 값과 이전 값을 뺀 값을 sum에 더 해줌
//     // arr[3] = 20 - arr[3-3 = 0] = 12 / 20 - 12 = 8
//     // 기존 sum(36) + 8 = 46 = sum(46)
//     answer = Math.max(answer, sum); // 처음에 할당한 38 , 46 비교
//     // answer = 할당
//   }
//   return answer;
// }

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

function solution(k, arr) {
  let answer = 0,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
