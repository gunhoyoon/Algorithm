// 학급 회장 / Hash Map
function solution(s) {
  let answer = "";
  let sh = new Map();
  for (let x of s) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    // has(x) - x의 요소안에 key가 있는지 ? 불리언으로 반환
    else sh.set(x, 1);
  }
  // sh 내부
  // 0 {"B" => 3}
  // 1 {"A" => 3}
  // 2 {"C" => 5}
  // 3 {"D" => 2}
  // 4 {"E" => 2}
  // key = "B" 등 , val = 3 등 이런식으로 할당되는거임
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sh) {
    // console.log(key, val);
    if (val > max) {
      max = val; // max , val 투표 숫자임.
      answer = key; // 그 투표를 받은 C 라는 key가 answer로 들어가야함
    }
  }
  return answer;
}
let s = "BACBACCACCBDEDE";
console.log(solution(s));

// Map , Set 찾아놓은거 여러번 보고 익히기

// new Map() – 맵을 만듭니다.
// map.set(key, value) – key를 이용해 value를 저장합니다.
// map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
// map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
// map.delete(key) – key에 해당하는 값을 삭제합니다.
// map.clear() – 맵 안의 모든 요소를 제거합니다.
// map.size – 요소의 개수를 반환합니다.
