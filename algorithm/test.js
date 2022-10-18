//좌표 정렬(sort)
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - a[1]; // y축으로 정렬
    else return a[0] - a[0]; // x 축으로 정렬
  });

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [2, 5],
  [2, 7],
  [3, 6],
];

console.log(solution(arr));
