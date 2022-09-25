// 봉우리 // 네 방향 탐색
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0]; // x축y축에 맞게 변수 쓴게 아님 지금, 12시 , 3시 , 6시 , 9시 방향임 각각
  let dy = [0, 1, 0, -1]; // 현재 위치의 위를 보고싶으면 x축의 -1 ,
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 1 = true
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 방향 탐색하는 행 좌표
        let ny = j + dy[k]; // 방향 탐색하는 열 좌표
        // k 포문 돌면서 dx, dy의 인덱스 번호 각각 입히는거,
        // 4 방향 탐색하니까 인덱스 0 부터 3까지
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
          // 상하좌우 순회한 그 값을 기존값과 비교 했을 때 같거나 큰게 있으면 안됨
          // if문 false 나왔으면 포문을 더 돌 필요가 없음
          // index의 값이 -1 로 가면 안되는 로직 포함
          flag = 0; // 0 = false 이후 break; 아닌게  순회한 값이 기존값과 비교했을 때 작거나 같을때
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

// function solution(arr) {
//   let answer;

//   return answer;
// }

// let arr = [];
// console.log(solution(arr));
