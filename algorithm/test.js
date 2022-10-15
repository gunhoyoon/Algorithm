// // 삽입 정렬 식 LRU 구현
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// answer.pop(); 배열의 마지막 요소 삭제
// answer.unshift(arr[1]); 배열 첫번째에 요소 추가해서 배열의 새 길이를 반환한다.

// function solution(size, arr) {
//   let answer = [];
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > size) answer.pop();
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//     }
//   });
//   return answer;
// }

// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));
