// 회의실 배정

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
    // y가 같으면 x로 정렬한다 / 다르면 y로 정렬한다
    // 이 코드가 있어야 y가 같은 경우도 정확하게 찍힘
  });

  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
      // y축의 값 넣어주고 if문에서 x축의 값과 비교
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
