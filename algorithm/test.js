// // 어떤 시간에 겹치는 최대 인원
// // 두번째 파라미터에 달하는 순간 없는 걸로 침
// function solution(times) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let T_line = [];
//   for (let x of times) {
//     T_line.push([x[0], "s"]);
//     T_line.push([x[1], "e"]);
//   }
//   T_line.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
//     // 시간이 같다면 s = 들어옴 , e = 나감 인데 같은 수의 e 인게 먼저 나가야하기때문에
//     // e = 나감 이기때문에 e가 먼저기때문에 숫자가 같을 시 아스키코드로 오름차순 해줌
//     else return a[0] - b[0];
//     //  같지않다면 시간으로 오름차순 정렬
//   });
//   let cnt = 0;
//   for (let x of T_line) {
//     if (x[1] === "s") cnt++;
//     // 들어왔다면 ++
//     else cnt--;
//     // 아니라면 나갔다는거니가 --
//     answer = Math.max(answer, cnt);
//     // answer와 cnt중 큰 값을 answer에 담아줌
//     // 카운터 된 cnt가 될거임
//   }
//   return answer;
// }
// let arr = [
//   [14, 18],
//   [12, 15],
//   [15, 20],
//   [20, 30],
//   [5, 14],
// ];
// console.log(solution(arr));

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
