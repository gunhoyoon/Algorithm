// // 삽입 정렬 식 LRU 구현(캐시)
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    // size : 5
    // i : 0 1 2 3 4
    // x = 1, 2, 3, 2, 6, 2, 3, 5, 7
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    // answer는 처음 다 0으로 세팅

    // 그래서 위의 조건이 false일 경우 pos는 그대로 -1
    // size - 1 = 4
    //
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } // if(x === answer[i]) 의 조건이 true 여서 pos에 i 값이 들어간 경우
    else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
    // x의 값을 answer 0 번째에 넣어준다. 이때부터 arr 값이 들어가는거임
    // 현재 작업하는 1번이 최우선 순위에 들어가야하니 처음으로 넣어주는거임 [0] 번째 인덱스
    // 작업하는 값이 중복될 경우 그 i까지만 돌고 다시 처음 0번째 인덱스에 넣어준다. 최신 작업이니까.
    // 중복되는 값이 없을 경우 size -1 즉 4번째 인덱스(맨끝) 부터 돌면서 하나씩 옆으로 복사
    // (마지막 지워주기 새로운 값 추가하기)
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
