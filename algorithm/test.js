function solution(arr) {
  let answer = 0;

  let studentTotal = arr[0].length;

  let testTotal = arr.length;

  for (let i = 1; i <= studentTotal; i++) {
    // 멘토
    for (let j = 1; j <= studentTotal; j++) {
      // 멘티
      let cnt = 0; // k번의 테스트가 다 실행되고 cnt === testTotal 비교까지 다 됐다면 초기화

      for (let k = 0; k < testTotal; k++) {
        let pi = (pj = 0);

        for (let s = 0; s < studentTotal; s++) {
          if (arr[k][s] === i) pi = s;

          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++; // 이 부분은 s 포문이 다 돌고 나서 실행되는거임
      }
      if (cnt === testTotal) answer++; // 이 부분은 k 포문이 끝나고 나서 실행
      // 총 돈 횟수
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 점수가 인덱스임 낮을수록 잘본게 맞음

// 이게 헷갈렸던 이유는 머릿속으로 4중 포문이 돌아가는걸 다 생각하려고 해서 그럼
// i j / k s 따로따로 돌아간다고 생각해보면

// 총 4명의 학생이 각각 멘토 , 멘티가 될 경우의 수 16가지의 경우의 수가 있지만
// 거기서 본인 스스로가 멘토 멘티 되는 경우를 제외할거임 일단 포함시켜서 for문을 다 돌거임
// 비효율적인거 같긴 한데 여튼 이걸 완전 탐색 중 브루탈 포스로 풀기때문에 이렇게 다 돌려주는거임
// 완전 탐색 : 브루탈 포스 : 컴퓨터가 빠른걸 이용해서 무식하게 다 돌려보는 완전 탐색의 아주 기본적인 방법
// 모든 상황을 포문으로 다 돌리기떄문에 그 상황을 다 설명하는것보다 되는 상황을 넣어서 생각하는게 가장 빠름 어차피 다 돌꺼니까.
// 멘토  멘티
// 1     1
// 2     2
// 3     3
// 4     4
