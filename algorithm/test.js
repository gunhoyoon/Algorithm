// // 필수 과목의 순서만 잘못된게 아니라면 true / 필수과목의 순서가 꼬였다면 false
// function solution(need, plan) {
//   let answer = "YES";
//   let queue = need.split("");
//   // 큐를 배열로 풀거임 . 문자열 > 배열 로 변환 후 순회하면서 비교할거임
//   // 큐에 need의 "C","B","A" 가 들어가있음
//   for (let x of plan) {
//     //  CBDGEA 순회
//     if (queue.includes(x)) {
//       // includes = 그 배열에 특정 값이 있는지를 확인하는 메서드
//       // x가 queue에 들어가있냐 ? 참이 되면 필수과목임
//       if (x !== queue.shift()) return "NO";
//       // 만약 필수과목이랑 queue의 맨 앞 부분이랑 다르다면 설계 잘못짬 = "NO"
//     }
//   }
//   if (queue.length > 0) return "NO";
//   // 다 돌았을 때 필수과목을 이수하지 않았다면 queue에 값이 남아있기 때문에
//   // 1이상이라면 NO가 됨 / 나머지 과목은 그냥 넘어가게 되어있음
//   return answer;
// }
// let a = "CBA";
// let b = "CBDGEA";

// console.log(solution(a, b));

// // queue를 직접 구현하는 것이 아닌 배열로 표현해서 사용하는 방법으로 해결힘
// // queue의 값을 필수과목의 배열 형태로 만듦
// // 필수과목 안의 값과 plan 를 x중 가장 앞에 값을 뽑아서 비교힘 // 다르다면 NO리턴
// // 만약 저걸 다 통과한다면 그대로 YES 출력인데,
// // 다 돌고 난 후 queue.length가 1 이상이라면 x(필수과목) 값이 다 빠진게 아니니까 NO 리턴

function solution(need, plen) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plen) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA";
let b = "CBDGEA";

console.log(solution(a, b));
