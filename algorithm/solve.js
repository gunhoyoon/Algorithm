// // 최솟값;
// function solution(a, b, c) {
//   let answer;
//   if (a < b) {
//     // 값 비교 ,  할당
//     answer = a;
//   }
//   answer = b;
//   if (answer < c) answer = answer; // 값 비교 , 할당
//   {
//     answer = c; //
//   }

//   return answer;
// }
// console.log(solution(2, 5, 1));

// 세변의 길이 합 삼각형이 가능한지 ?
// function solution(a, b, c) {
//   let answer = "Yes",
//     max;
//   let sum = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c; //일단 최댓값 먼저 구하기
//   if (sum - max <= max) answer = "no"; // 총합 - 최댓값이 = 남은 값 <= 최댓값 이라면 No 아니라면 초기값 Yes 출력
//   return answer;
// }
// console.log(solution(6, 7, 11));
// 삼각형 특성상 가장 긴 변 길이 < 나머지 두 변의 합
// 어떤 변이 가장 큰지 알 수 없으므로 세변의 합 , 최댓값 구한 다음  세변의 합 - 최댓값 <= 최댓값 이라면 no 아니면 yes

// 학생 수 연필 총 몇다스가 필요한지 ?
// function solution(n) {
//   let answer = Math.ceil(n / 12);
//   return answer;
// }
// console.log(solution(128));
// n / 12 하면 나오는 몫 + 나머지 를 무조건 올림(ceil) 해서 answer에 할당

// 1부터 입력 받은 수 까지의 총 합 ?
// function solution(n) {
//         let answer = 0;
//         for (let i = 1; i <= n; i++) { // let i = 1 로 설정 , i가 n까지 1씩 증가하면서 for문 실행
//           answer = answer + i;  // 초기값 0인 answer에  i = 1 더해주고 포문 돌면서 하나씩 증가한 값 더 해주기
//         }
//         return answer;
//       }
//       console.log(solution(100));

// const arr = [5, 3, 6, 7, 8, 11, 4, 1];
// function solution(arr) {
//   let answer,
//     min = arr[0]; // 배열의 첫번째 인덱스를 min에 넣어줌 또는 Number.안전한 최댓값
//   for (let i = 1; i < arr.length; i++) {
//     // 배열 순회
//     if (arr[i] < min) min = arr[i]; // 순회하면서 min 값이랑 비교 조건 충족 시 arr[i] 할당
//   }
//   answer = min;
//   return answer;
// }
// console.log(solution(arr));
//   최솟값 구하기. min 이라는 변수 안에 배열의 첫번째 인덱스를 넣고 , 포문에서 인덱스를 1씩 증가시킴, 그 배열의 길이까지 진행
//    if문 안에서 1씩 증가한 배열의 인덱스 값과 현재 min 비교해서 answer = min 할당

// 배열에서 홀수 찾고 그 합을 더한거 , 그 홀수중 가장 작은거
// const arr = [12, 77, 38, 41, 53, 92, 85];
// function solution(arr) {
//   let answer = []; // sum , min 배열에 푸시
//   let sum = 0, // 홀수 값 더해줄거라 0으로 초기화
//     min = Number.MAX_SAFE_INTEGER; // 최솟값 비교를 위해 맥스값 넣음
//   for (let x of arr) {
//     // 변수 x가 arr라는 배열 하나씩 돌거임
//     if (x % 2 === 1) {
//       // 돌면서 홀수 탐색
//       sum += x; // 걸린 애들(홀수) 반환 즉시 sum에 하나씩 더 해줌 sum = sum + x
//       if (x < min) min = x; // 여긴 홀수만 들어올 수 있음 그걸로 최솟값 비교
//     }
//   } // for of 문이 끝난 이후 빈 배열에 푸시 + 리턴
//   answer.push(sum); //
//   answer.push(min);
//   return answer;
// }
// console.log(solution(arr));

// 차량 10부제 문재 번호 일의 자리 , 날짜 일의 자리 같은거 운행 x
// arr = [25, 23, 11, 47, 53, 17, 33];
// function solution(day, arr) {
//   let answer = 0; // 위반한 자동차의 대수를 입력하는거니까 conut 를 해야하니 0 초기화
//   for (let x of arr) {
//     // 배열 탐색
//     if (x % 10 === day) answer++; // 하나씩 10으로 나눈 나머지가 day(3)과 같으면 answer++해줌 (일의 자리만 비교하면 되니까)
//   }

//   return answer;
// }
// console.log(solution(3, arr));

// + 고차함수 자신의 매개변수에 함수가 들어오는 애들 forEach , map , filter , reduce

// 9명의 난쟁이
// function solution(arr) {
//   let answer = arr;
//   let sum = arr.reduce((a, b) => a + b, 0);
//   for (let i = 0; i < 8; i++) {
//     // 원래 7명인데 9명이 되어버림 , 7명 키 합이 100이니까 2명을 짤라내야됨
//     for (let j = i + 1; j < 9; j++) {
//       // 값이 2개가 나와서 걔네들을 제거해야하니까 중첩포문을 돌아서 변수를 2개만듦
//       if (sum - (arr[i] + arr[j]) === 100) {
//         // 총합과 걔넬 빼고 100 이 나온 친구들을 제거해줌
//         arr.splice(j, 1); // j번째 값 1개를 제거해라. 근데 j가 i보다 뒤에 있기때문에 J먼저 제거를 해서 순서가 달라지지않게 해줌
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return answer;
// }
// arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));
// 배열의 인덱스 - 2 , 총합 100인 친구들 찾기

// 문자열 중 일부 "#" 로 바꾸기
// 1.
// let str = "BANANA";
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     // 문자열도 for of로 탐색 가능

//     if (x === "N") answer += "#"; // 트루라면 answer에 "#" 할당
//     else answer += x; // 아니면 그냥 x 그대로 넣어주기
//   }

//   return answer;
// }
// console.log(solution(str));

// 2.
// let str = "BANANA";
// function solution(s) {
//   let answer = s; // 문자열 복사는 값만 할당 배열처럼 주소 참조 x
//   answer = answer.replace(/A/g, "#"); // s가 변한다고 answer가 바뀌지 않음
//   return answer; // replace(/A, "#") 그냥 이렇게 쓰면 첫번째 A만 찾아 바꾸고 끝냄, 전역적으로 하려면 뒤에 g 붙여줘여함
// }
// console.log(solution(str));

// 문자열 중 문자가 몇갠지 ?

// function solution(s, t) {
//   // 인자는 str과 text
//  1.
// let answer = 0;
//   for (let x of s) {
//     // 순회
//     if (x === t) answer++; // 참이면 +1
//   }
//   return answer;
// }
// let str = "COMPUTERPROGRAMMING";
// console.log(solution(str, "O"));

// function solution(s, t) {
// 2 .
// let answer = s.split(t).length; // split(구분자) 인자로 받아온 "R" 에서 끊어주는거임
//   return answer - 1; // 한줄을 3번 자르면 총 4개가 나오니 구분자의 갯수를 알고싶으면 -1 해주면 됨
// }
// let str = "COMPUTERPROGRAMMING";
// console.log(solution(str, "R"));

// 문자열 중 대문자 갯수 찾기
// function solution(s) {
//     1.
//     let answer = 0;
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer++;
//     // x는 기본 s를 순회하면서 하나씩 출력하는거임 (대소문자 포함)
//     // x.toUpperCase는 x의 대문자 버전임 그 둘을 비교하는거임
//   }
//   return answer;
// }
// let str = "KoreaTimeGoob";
// console.log(solution(str));

// + 아스키 코드로도 비교 가능 대문자 (65(A)~90(Z))
// + 아스키 코드로도 비교 가능 소문자 (97(a)~122(z))

// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     let num = x.charCodeAt(); // 아스키 코드
//     if (num >= 65 && num <= 90) answer++; // x의 아스키코드 즉 이 코드로 대소문자 구분가능. 65~90 이내 시 answer++;
//   }
// }

// 대문자로 통일하기
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     answer += x.toUpperCase();
//   }
//   return answer;
// }
// let str = "itisTimeToStudy";
// console.log(solution(str));

// function solution(s) {
// 2 .
// let answer = "";
//   for (let x of s) {
//     if (x === x.toLowerCase()) answer += x.toUpperCase();
//     // 기존 x랑 소문자 버전이랑 비교했을 때 true 면 실행
//     else answer += x; // false 면 기존x 할당
//   }
//   return answer;
// }
// let str = "ItisTimeToStudy"; //
// console.log(solution(str));

// function solution(s) {
//   3 .
//     let answer = "";
//   for (let x of s) {
//     let num = x.charCodeAt();
//     if (num >= 97 && num <= 122) answer.fromCharCode(num - 32);
//     // 아스키 코드 대소문자 변형(+32 , -32) 문자열 변형(fromCharCode)
//     else answer += x;
//   }
//   return answer;
// }
// let str = "itisTimeToStudy";
// console.log(solution(str));

// 대소문자 변환
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer += x.toLowerCase(); // 대문자라면 소문자로 변환
//     else answer += x.toUpperCase(); // 대문자가 아니라면 대문자로 변환
//   }

//   return answer;
// }
// console.log(solution("StuDY"));

// 가장 긴 문자열 출력

// function solution(s) {
//   let answer = "";
//   max = Number.MIN_SAFE_INTEGER;
//   for (let x of s) {
//     if (x.length > max) {
//       // x값 순회 그 x의 length를 가지고 비교
//       max = x.length; // 참인 x의 length를 max에 할당 // 하나씩 계속 순회
//       answer = x; // x값 아직 살아있음 , 그 값을 answer에 넣어주는거임
//     }
//   }

//   return answer;
// }
// let str = ["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(str));

// 가운데 문자 뽑아내기
// function solution(s) {
//   let answer = "";
//   let mid = Math.floor(s.length / 2); // mid는 문자열의 length / 2 + floor 한 값임

//   if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//   // mid번째 인덱스부터 mid+1 "전까지" 뽑아내라
//   //   if (s.length % 2 === 1) answer = s.substr(mid, 1); // substr = mid -1 인덱스부터 2개 뽑아내라
//   // substring(mid,mid+1) 즉, mid부터 mid+1 전까지 출력(인덱스임)
//   else answer = s.substring(mid - 1, mid + 1); //

//   //   else answer = s.substr(mid - 1, 2); // substr = mid -1 인덱스부터 2개 뽑아내라
//   // 짝수는 딱 떨어짐 그럼 그 good라고 하면 2(인덱스) 0 1 2 3이니까
//   // mid - 1부터 (1번째 인덱스) , mid + 1전까지 출력 두번쨰 인자 전까지 출력한다는게 핵심
//   return answer;
// }
// let str = "study";
// console.log(solution(str));

// 중복문자 제거
// function solution(s) {
//   let answer = "";
//   for (let i = 0; i < s.length; i++) {
//     // 인덱스로 탐색해야함 ,
//     // console.log(s[i], i, s.indexOf(s[i])); 기존 인덱스의 값 , 인덱스 , 처음 인덱스의 값
//     if (s.indexOf(s[i]) === i) {
//       // 최초의 본인의 인덱스 위치 === 본래 자기 위치를 비교 true면 answer에 추가
//       // 예 ) i = 0 = k , s.indexOf(s[i]) , i = 0이니까 즉 k임 === i(0 ===k) 니까
//       // answer 에 추가할거암 += s[i] i는 0 즉 k니까 k가 하나 들어간거임 flase면 건너뛸거임
//       answer += s[i];
//     }
//   }

//   return answer;
// }
// let str = "keskkest";
// console.log(solution(str));

// str.indexOf("k") 는 기본적으로 사용하게 되면
// 인자로 넣은 "k" 라는 친구를 찾아라 str안에서 .
// 인자 하나만 넣어주면 가장 먼저 찾은 인덱스를 반환함 ex) 0
// str.indexOf("k" , 1) 이라함은 1번째 인덱스부터 k를 찾아서 인덱스 반환 후 끝 리턴값이 뭔지를 아는게. 일단 중요

// 추가로 중복 문자 갯수 찾기
// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf("k"); // 0번째 인덱스부터 k찾아서 반환
//   while (pos !== -1) {
//     // while문 : 조건이 true시 진행, false 시 끝남.
//     answer++; // true면 answer + 1
//     pos = s.indexOf("k", pos + 1); // pos 현재 0이니까 여기서 +1, 즉 1번째 인덱스부터 다시 순찰시킴
//   }
//   return answer; // 그렇게 쭉 돌다가 while false 뜨면 여태 answer  리턴
// }
// console.log(solution("keskkest"));

// 중복단어제거

// function solution(s) {
//   let answer = [];
//   answer = s.filter((v, i) => {
//     // 필터 첫번째 인자 (콜백함수 내부임) 여기서 false가 나온 값을 거르고 true만 반환을 해주는거임
//     //
//     // 1 .
//     // if (s.indexOf(v) === i) return true;
//     // 실행 결과 자체가
//     // s.indexOf("good") = 0 === i(0) = true
//     // s.indexOf("time") = 1 === i(1) = true
//     // s.indexOf("good") = 0 === i(2) = fasle
//     // s.indexOf("time") = 1 === i(3) = fasle
//     // s.indexOf("student") = 4 === i(4) = true
//     //
//     //
//     // 2.
//     // return s.indexOf(v) === i; // 이 조건식의 결과가 t / f 니까 결과대로 filter로 반환
//   });

//   return answer; // true만 모아서 새로운 배열을 반환하니 ["good","time","student"] 기존 배열 유지
// }
// let str = ["good", "time", "good", "time", "student"];
// console.log(solution(str));

// 큰수 출력하기
// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]); // 일단 첫번째 수는 무조건 넣어줘야하니 푸시를 정적으로 해준다
//   for (let i = 1; i < arr.length; i++) { // 0번째는 넣었으니 1번부터 순찰
//     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
// 만약 arr[i] 가 arr[i-1] 보다 크다면 push해서 추가 아니면 그냥 넘어가기
//   }

//   return answer;
// }

// let arr = [7, 3, 9, 5, 6, 12];
// console.log(solution(arr));

// 키 큰 친구 보이기
// function solution(arr) {
//   let answer = 1, // 처음엔 무조건 보이니까 1 넣고 시작
//     max = arr[0]; // 초기 친구가 가장 큰 친구
//   for (let i = 1; i < arr.length; i++) { // 순찰
//     if (arr[i] > max) { // 배열 돌면서 비교 트루시 ++ , 맥스 갱신
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));

// 가위바위보
// function solution(a, b) {
//   let answer = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += "D" + ""; // 비기는 경우 한번
//     else if (a[i] === 1 && b[i] === 3)
//       answer +=
//         "A" + ""; // a가 이기는 경우 총 3가진데 다양하게 이기는 = else if
//     else if (a[i] === 2 && b[i] === 1) answer += "A" + "";
//     else if (a[i] === 3 && b[i] === 2) answer += "A" + "";
//     else answer += "B" + ""; // b가 이기는 새로운 상황 else ,
//   }
//   return answer;
// }
// let a = [2, 3, 3, 1, 3];

// let b = [1, 1, 2, 2, 3];
// console.log(solution(a, b));
// 1 가위 2 바위 3 보

// 점수 계산 연속 정답 시 가산 점
// function solution(s) {
//   let answer = 0;
//   cnt = 0;
//   for (let x of s) {
//     if (x === 1) {
//       cnt++; // cnt = cnt(0) + 1; 알아서 연속 1이 누적되는거임
//       answer += cnt; // 그리고 그거 할당
//     } else cnt = 0; // 틀ㄹ리면 0으로 초기화
//   }

//   return answer;
// }

// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));

// 이중 포문 돌때 j가 먼저 돌고 값을 어떤식으로 전해주는지를 좀 볼 필요가 있음
// // 그리고 등수로 따진다고 하니까 처음 1로 전부 다 초기화를 시켜주는 발상 + 이후에 1씩 늘리면서 등수정하기
// function solution(arr) {
//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1); // 일차원 배열 1로 초기화
//   for (let i = 0; i < n; i++) {
//     // i = 0 부터 순회
//     for (let j = 0; j < n; j++) {
//       // j가 i보다 먼저 다 돌고 끝남 i의 인덱스 처음 0 값을 정해주고 끝남
//       // 87이 0번째니까 다 돌아서 4등으로 마무리
//       // 다음 89 1번째 다 돌고 3등으로 마무리 이런식으로 쭉쭉감
//       // 결국 점수가 같고 76점이 돌면 전부 밀려나니까 5등이 되는거임
//       if (arr[j] > arr[i]) answer[i]++; // 비교해서 밀릴때마다 1등씩 밀리는 로직
//     }
//   }

//   return answer;
// }

// let arr = [87, 89, 92, 100, 76];
// console.log(solution(arr));

// 격자판 최대합
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length; // 5
//   let sum1 = (sum2 = 0); // 스코프때문에 중복 선언
//   //arr[행][열]
//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0; // j가 다시 돌기전에 열과 행 더한 값을 초기화 시켜줌
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j]; // 행이 더해짐 ? i가 0인채로 j가 열을 돌면서 더해줌
//       sum2 += arr[j][i]; // 열이 더해짐 ? i가 0인채로 j가 행을 돌면서 더해줌
//       // 어차피 이중포문이면 i처음 돌고 j가 쭉 도니까 행 , 열 을 구하려면 인덱스 위치를 바꿔주면 되는거임
//     }
//     answer = Math.max(answer, sum1, sum2); // 열과 행 전부 구함 이 중 가장 큰 수가 할당되는거임
//   }

//   sum1 = sum2 = 0; // 위에서 계산한 들고 있는 값 초기화
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i]; // 열과 행을 전부 i로 맞추면 대각선의 합을 구함. 인덱스 번호대로 따라가니까
//     sum2 += arr[i][n - i - 1]; // [0][4], [1][3] 이런식으로 반대쪽 대각선도 구할 수 있음
//   }
//   answer = Math.max(answer, sum1, sum2); // 행 + 열의 최댓값이 answer에 들어간 상황에서 자동으로 대각선의 합이랑 비교가 됨
//   return answer;
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// console.log(solution(arr));

// 봉우리 // 네 방향 탐색
// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;

//   let dx = [-1, 0, 1, 0]; // x축y축에 맞게 변수 쓴게 아님 지금, 12시 , 3시 , 6시 , 9시 방향임 각각

//   let dy = [0, 1, 0, -1]; // 현재 위치의 위를 보고싶으면 x축의 -1 ,

//   for (let i = 0; i < n; i++) {
//     // i < n , n = arr.length
//     for (let j = 0; j < n; j++) {
//       let flag = 1; // 1 = true
//       for (let k = 0; k < 4; k++) {
//         // k  < 4  4 = dy ,dx의 index
//         let nx = i + dx[k]; // 방향 탐색하는 행 좌표 // 처음 i 0 고정 k 만 0 1 2 3 증가
//         let ny = j + dy[k]; // 방향 탐색하는 열 좌표 // 처음 j 고정 k만 0 1 2 3 증가
//         // k 포문 돌면서 dx, dy의 인덱스 번호 각각 입히는거,
//         // 4 방향 탐색하니까 인덱스 0 부터 3까지
//         if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
//           // 상하좌우 순회한 그 값을 기존값과 비교 했을 때 같거나 큰게 있으면 안됨
//           // if문 false 나왔으면 포문을 더 돌 필요가 없음
//           // 처음 0 , 0 일때는 인덱스가 -1이 되어버림 그러면 안되니까,
//           // 처음 nx ny가 1보다 작은 경우를 배제시켜놓는 if문을 시작함
//           flag = 0; // 0 = false 이후 break; 아닌게  순회한 값이 기존값과 비교했을 때 작거나 같을때
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];
// console.log(solution(arr));

// // 회문 문자열 앞으로 읽으나 뒤로 읽으나 똑같을 때 회문 문자열이라고 함 // 대소문자 구분안함
// // 1번 풀이
// function solution(n) {
//   let answer = "No";
//   let lowN = n.toLowerCase();
//   let reverseN = n.split("").reverse().join("").toLowerCase();
//   //   split("").reverse().join(""); 전체 문자열 뒤집기
//   // 스트링일때 split("") 으로 자르면 하나하나 잘린 배열로 만들어지고, 그 배열을 뒤집고 , join("") 으로 다시 이어붙임
//   if (lowN === reverseN) answer = "YES";

//   return answer;
// }
// let str = "asoOOOOOOoOosa";
// console.log(solution(str));

// // 2번 풀이
// let answer = "YES";
// s = s.toLowerCase();
// let len = s.length;
// for (let i = 0; i < Math.floor(len / 2); i++) {
//   // Math.floor(len / 2) 4/2 = 2, 5/2 = 2
//   if (s[i] !== s[len - i - 1]) return "No"; //  s[0] !== s[3] return "No"
//   // 맨 앞자리랑 맨 끝자리를 비교해서 다를 시 true인데 그러면 "No"를 리턴하겠다;.
// }

// 팰린드롬 = 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 함
// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase().replace(/[^a-z]/g, "");
//   // 정규식 표현 /[^a-z]/g , ^ = 부정임  a - z가 ^(아닌 것들)/g(글로벌 적용) 찾아서 , " " 빈 문자열로 다 바꿔줄거임
//   if (s.split("").reverse().join("") !== s) return "No";
//   // 저렇게 반대로 한 친구들이랑 기존의 i랑 같지 않다면 true =  "No" ,  같다면 기존 answer = "YES"

//   return answer;
// }
// let str = "found7 , time ; study;  Yduts; emit, 7Dnuof";
// console.log(solution(str));

// replace(/[^a-z]/g); // 소문자 a ~ z 외에 다 제거해라

// 문자열 + 숫자 = 숫자만 추출 , 정수로
// 풀이 1
// function solution(s) {
//   let answer = "";
//   s = s.toLowerCase().replace(/[a-z]/g, "");
//   // 로우로 소문자로 통일하고 , 정규식 표현 /[a-z]/g , a - z인 애들 /g(글로벌 적용) 찾아서 , " " 빈 문자열로 다 바꿔줄거임)
//   answer = parseInt(s);
//   return answer;
// }
// let str = "g0en2T0s8eSoft";
// console.log(solution(str));

// Number.parseInt()	문자열을 파싱하여, 문자열에 포함된 숫자 부분을 정수 형태로 반환함.

// 풀이 2
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     // 문자열 순회
//     if (!isNaN(x)) answer += x;
//     // 숫자가 아닌게 아니냐? = 숫자가 맞냐? 맞으면 answer에 추가시켜주장
//     // 앞자리에 0 이 있으니까 parseInt에 넣어서 정수로 만들어주자
//   }
//   return parseInt(answer);
// }
// let str = "g0en2T0s8eSoft";
// console.log(solution(str));

// 문자열 + 숫자 조합중 문자열이 다 필요가 없는 상황이라면 대소문자 통일 시키고 한번에 날려도 좋은듯 replace(/[a-z]/g, "")

// // 문자 최단 거리
// function solution(s, t) {
//   let answer = []; // 문자열 중 문자 t와의 최소 거리를 담아둘 빈 배열
//   let p = 1000;
//   for (let x of s) {
//     // 순회
//     if (x === t) {
//       p = 0; // 같다면 0 푸시
//       answer.push(p);
//     } else {
//       p++; // 다르다면 p ++
//       answer.push(p); // e를 한번이라도 만나게 되면  p = 0
//     }
//   }
//   p = 1000; // p 초기화
//   for (let i = s.length - 1; i >= 0; i--) {
//     // 10번째 인덱스까지 순회 , 1씩 감소하면서 역으로 돌림
//     if (s[i] === t)
//       p = 0; // 위에서 이미 0은 푸시를 다 해줬기때문에 여기선 푸시 안해줌
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p); // answer[i] = 기존에 순차적으로 구했던 answer값
//       // p = 여기서 구하고 있는 값  , 둘 중 작은 거.
//     }
//   }
//   return answer;
// }
// let str = "teachermode";
// console.log(solution(str, "e"));

// 두번째 인자로 받는 e를 저 문자열 각각의 문자들이 e랑 위치 차이가 얼마 나는지
// 제자리면 0 자리 수 대로 1 , 2  출력되게 해야됨

// 문자열을 순서대로 탐색해서 중간에 껴있는 문자 e와 나머지 문자의 최소거리를 구하는 문제인데,
// 맨 앞부터 순차적으로 돌아갔을 때 중간에 껴있는 e가 나오기 전까지 기준이 처음 나온 e이므로 자연스레 거리가 멀어질 수 밖에 없다.
// 그러므로 뒤부터 인덱스를 탐색하는 로직도 하나 만들어
// 앞으로 탐색하는 1번 배열 , 뒤로 탐색하는 2번 배열 을 비교해서 최솟값을 그 자리마다 집어넣어주면 된다.

// 실패코드
// function solution(s, t) {
//   let answer = [];
//   let answerZ = [];
//   let reverseS = s.split("").reverse().join("");
//   let p = 1000;
//   console.log(reverseS);
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   for (let z of reverseS) {
//     if (z === t) {
//       p = 0;
//       answerZ.push(p);
//     } else {
//       p++;
//       answerZ.push(p);
//     }
//   }

//   return answer;
// }
// let str = "teachermode";

// console.log(solution(str, "e"));

// 처음 했던 생각은 기존 배열 탐색해서 answer에 푸시한 배열 하나랑, 뒤집은 리버스 배열 하나 만들어서,
// 인덱스 위치값대로 비교해서 작은걸 answer에 최종 할당하려 했으나, 생각대로 구현하기에 실패했음

// 반복 문자열 압축
// function solution(s) {
//   let answer = ""; // 여기에 담을거임
//   let cnt = 1; // 자기자신은 항상 있으니까 1로 초기화를 해야함
//   s = s + ""; // 스트링으로 변한 숫자가 들어갈 빈 공간
//   for (let i = 0; i < s.length - 1; i++) {
//     // 인덱스 탐색 = for문
//     // 빈 공간 전까지 탐색해야하니 lenghth -1;
//     if (s[i] === s[i + 1]) cnt++; // 현재와 다음이 같다면 cnt++
//     else {
//       answer += s[i]; // false 시 다른 문자열이니까 기존 문자열 할당
//       if (cnt > 1) answer += String(cnt); // 반복횟수 1은 안치니까 , 1보다 클때 스트링으로 만들어서 붙여줌
//       cnt = 1; // 붙이고나면 다시 1로 초기화
//     }
//   }
//   return answer;
// }
// let str = "KKHSSSSSSSE";
// console.log(solution(str));

// 자리수의 합 , 동일 시 원래 숫자 중 큰 숫자
// function solution(arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     // 짜르기 1
//     let sum = x
//       .toString() // 스플릿을 위해 바꿔주고
//       .split("") // 다 짤라주고
//       .reduce((a, b) => a + Number(b), 0); // 각자리 더하는데 스트링으로 더해지니까 넘버로 더해줌

//     // 짜르기 2
//     // let sum = 0,
//     //   tmp = x; // 여기서 직접 x를 변형하지말고 , tmp 으로 하나 더 만들어둠
//     // while (tmp) {
//     //   sum += tmp % 10; // 나머지의 값이 sum에 들어가게 될거임 , tmp의 값이 없을때까지 돌거임
//     //   tmp = Math.floor(tmp / 10); // 128의 경우, tmp / 10 의 나머지가 8 , 2 , 1 순으로 나옴
//     // }

//     if (sum > max) {
//       // 위에서 만들어낸 각 sum을 가지고 max랑 비교해서 더 큰 수를 max에 할당함 .
//       max = sum;
//       answer = x; // x는 기존 x임 , 128 / 각 자리 수를 더해서 크다면 그 원본 x를 넣어줘야하기 떄문에 쓰는거임
//     } else if (sum === max) {
//       // 만약 둘이 합이 같다면 원본을 비교해서 더 큰걸 할당
//       if (x > answer) answer = x; //
//     }
//   }
//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(arr));

// // 뒤집었을때 소수 구하기.
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     // 뒤집는 방법 1

//     let res = Number(x.toString().split("").reverse().join(""));
//     // parseInt 대신 Number 화 시켜버리기

//     // 뒤집는 방법 2
//     // let res = 0;
//     // while (x) {
//     //   let t = x % 10;

//     //   res = res * 10 + t;

//     //   x = parseInt(x / 10);
//     // }
//     if (isPrime(res)) answer.push(res);
//   }

//   return answer;
// }
// let arr = [32, 55, 62, 20, 250, 370, 200, 3, 100];
// console.log(solution(arr));

// 실패코드
// function solution(arr) {
//   let answer = [];

//   for (let x of arr) {
//     let xReverse = x.toString().split("").reverse().join("");
//     for (let i = 2; i <= Math.floor(Math.sqrt(parseInt(xReverse))); i++) {
//       if (parseInt(xReverse) % i === 0) {
//         null;
//       } else answer.push(parseInt(xReverse));
//     }
//     // console.log("qqqqq", parseInt(xReverse));
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 3, 100];
// console.log(solution(arr));

//
//
//// 뒤집었을때 소수 구하기.
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     // 여기서의 num 은 제곱근으로 바뀐 num임
//     // N의 약수는 무조건 sqrt(N)의 범위에 존재한다.
//     console.log(i);
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     // 뒤집는 방법 1

//     let res = Number(x.toString().split("").reverse().join(""));
//     // parseInt 대신 Number 화 시켜버리기

//     // 뒤집는 방법 2
//     // let res = 0;
//     // while (x) {
//     //   let t = x % 10;

//     //   res = res * 10 + t;

//     //   x = parseInt(x / 10);
//     // }
//     if (isPrime(res)) answer.push(res);
//   }

//   return answer;
// }
// let arr = [32, 55, 62, 20, 250, 370, 200, 3, 100];
// console.log(solution(arr));

// 실패코드
// function solution(arr) {
//   let answer = [];

//   for (let x of arr) {
//     let xReverse = x.toString().split("").reverse().join("");
//     for (let i = 2; i <= Math.floor(Math.sqrt(parseInt(xReverse))); i++) {
//       if (parseInt(xReverse) % i === 0) {
//         null;
//       } else answer.push(parseInt(xReverse));
//     }
//     // console.log("qqqqq", parseInt(xReverse));
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 3, 100];
// console.log(solution(arr));

//
//
////완전 탐색 / 브루탈포스 / 멘토링
// function solution(arr) {
//   let answer = 0;

//   let studentTotal = arr[0].length;

//   let testTotal = arr.length;

//   for (let i = 1; i <= studentTotal; i++) {
//     // 멘토
//     for (let j = 1; j <= studentTotal; j++) {
//       // 멘티
//       let cnt = 0; // k번의 테스트가 다 실행되고 cnt === testTotal 비교까지 다 됐다면 초기화

//       for (let k = 0; k < testTotal; k++) {
//         // 각 테스트
//         let pi = (pj = 0);

//         for (let s = 0; s < studentTotal; s++) {
//           // 각 테스트에서의 등수
//           if (arr[k][s] === i) pi = s;

//           if (arr[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++; // 이 부분은 s 포문이 다 돌고 나서 실행되는거임
//       }
//       if (cnt === testTotal) answer++; // 이 부분은 k 포문이 끝나고 나서 실행
//       // 총 돈 횟수
//     }
//   }

//   return answer;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));

// //점수가 인덱스임 낮을수록 잘본게 맞음

// //이게 헷갈렸던 이유는 머릿속으로 4중 포문이 돌아가는걸 다 생각하려고 해서 그럼
// //i j / k s 따로따로 돌아간다고 생각해보면

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

// 정해진 금액(m) 내에서 최대로 살 수 있는 상품(product)의 갯수 / 완전 탐색(브루탈 포스)
// function solution(m, product) {
//   let answer = 0;

//   let n = product.length;

//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   // sort (a[0] = 상품비 + [1] 배송비 ) - (b[0] = 상품비 + [1]배송비) 더 작은 순으로 정렬,
//   // 많이 사는게 중요하기 때문에 낮은 순으로 정렬해서 갯수 늘리는게 중요함 / a - b는 오름차순, b - a는 내림차순이다.

//   // 이중구조가 되긴하지만 각자 다른 일을 한다는걸 아는게 중요함

//   for (let i = 0; i < n; i++) {
//     // 상품의 갯수만큼 전부 다 할인을 받아봐야하니 i 포문 쓰고

//     let money = m - (product[i][0] / 2 + product[i][1]); // 어떤걸 할인받았을 때 좋을지 모르겠으니 다 돌려봄 (완전 탐색)
//     // money = 할인받은 상품을 사고 남은 금액
//     // i번째의 상품을 할인 받아 산거임 , 상품 가격은 짝수라고 했으니 다른 처리는 안해줌

//     let cnt = 1; // 할인받은 상품은 샀기 때문에 cnt = 1

//     for (let j = 0; j < n; j++) {
//       //  i가 정해진 이후 나머지를 순차적으로 사야하니 j포문으로 같은 배열을 한번 더 도는거임

//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       // 남은 금액이 앞으로 살 금액보다 적은 경우 멈춤

//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         // j는 i(할인받은 상품) 외의 나머지 상품을 순차적으로 사는거라 i랑 같을 수 없음
//         // i랑 같지 않고 다음 상품의 금액을 더 한 값이 Money보다 작거나 같다면(살 수 있다면)2
//         money -= product[j][0] + product[j][1];
//         // 남은 금액에서 차감해준다 그 상품의 금액을

//         cnt++;
//         // 그리고 하나 더 샀으니 ++해줌
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }

//   return answer;
// }

// let product = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];
// console.log(solution(28, product));

//
//
// k번째 큰 수 구하기
// function solution(n, k, arr) {
//   let answer;
//   let tmp = new Set(); // Set 특성상 중복된 값은 들어가지 않음 , 3중 포문을 돌때 중복된 값을 제거해줌
//   for (let i = 0; i < n - 2; i++) {
//     // 3장을 뽑아 각 카드의 합한 값
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         tmp.add(arr[i] + arr[j] + arr[k]); // set에 추가하는 메소드가 add
//         // 3장을 뽑아 합한 값중 k번째인 수를 구하는거니까 다 더해줌
//       }
//     }
//   }
//   let a = Array.from(tmp).sort((a, b) => b - a);
//   answer = a[k - 1]; // k번째 값을 구하는거임 , 해당 값을 구해야하니 index = length - 1  이므로 -1 해줌.
//   return answer;
// }
// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

// // Array.from() 메서드는 유사 배열 객체(array-like object)나
// // 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다

//
//// 작은 순서대로 두 배열 합치기 / 시간복잡도 / 투 포인터 알고리즘 기초
// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;

//   let p1 = (p2 = 0);
//   // 각 배열의 인덱스를 각각 집어주는거임
//   while (p1 < n && p2 < m) {
//     // n , m 까지 반복 (둘다 끝나지 않았다면)  이라는 뜻도 있음
//     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//     // 작은 쪽 푸시를 하고 ++은 그 이후에 해주는거임
//     else answer.push(arr2[p2++]);
//     // arr[p1] = 0 부터 시작 / arr1 <= arr2 작거나 같다면 작은 수 , 배열에 푸시해주기
//     // 둘 중 하나의 배열이 끝나면 false로 종료,
//   }
//   while (p1 < n) answer.push(arr1[p1++]);

//   while (p2 < m) answer.push(arr2[p2++]);
//   // n또는 m보다 작으면 아직 그 배열이 끝나지 않았다는거고 , 푸시 , 증가 해줌 그대로 이어붙이는거임
//   return answer;
// }
// let arr1 = [1, 3, 5];
// let arr2 = [2, 3, 6, 7, 9];
// console.log(solution(arr1, arr2));

// // 정렬 자체를 sort로도 할 수 있다고 생각하는데, 여기선 사용하지 않을거다.
// // 그 이유는 sort의 시간복잡도는 NlogN 이다.

// // 우리가 할 while 문 시간복잡도는 O(n+m) 의 시간복잡도가 된다.

//
//
// // 공통 원소 오름차순으로 출력하기 / 교집합 찾기
// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   // 각자 내림 차순
//   let p1 = (p2 = 0); // 인덱스로 쓸 포인터 초기화
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] === arr2[p2]) {
//       // 같은 수라면
//       answer.push(arr1[p1++]); // 푸시 , p1++ , p2++
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) p1++; // p1이 작다면 p1++ 다음 인덱스탐색
//     else p2++; // p2가 작다면 p2++ 다음 인덱스 탐색
//   }

//   return answer;
// }
// let arr1 = [1, 3, 9, 5, 2];
// let arr2 = [3, 2, 5, 7, 8];
// console.log(solution(arr1, arr2));

//
//
//
// 연속부분수열 / 투 포인터 알고리즘
// function solution(m, arr) {
//   let answer = 0,
//     sum = 0,
//     lt = 0; // 포인터를 두개 잡아야하는데 , 이중 포문을 안쓸거기때문에 변수 lt
//   // lt가 증가할때마다 sum이 작아지는 구조
//   for (let rt = 0; rt < arr.length; rt++) {
//     // rt가 증가할때마다 sum이 늘어나는 구조
//     sum += arr[rt]; // 하나씩 돌면서 sum에 누적됨
//     if (sum === m) answer++; // rt값이 늘어났으니 m과 비교해서 확인해봄
//     while (sum >= m) {
//       // sum 이 m보다 크거나 같을 경우니까 그전까진 false로 그냥 지나감
//       sum -= arr[lt++]; // 크다면 줄여줘야하니 lt를 증가시켜줘야함
//       if (sum === m) answer++; // lt의 값에 변동이 있었으니 또 확인
//     }
//   }

//   return answer;
// }

// let arr = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, arr));

//
//
//// 투 포인터 알고리즘 배열 합이 M이하로 되는 경우가  총 몇번인지 ? 밀땅밀땅
// function solution(m, arr) {
//   let answer = 0,
//     sum = 0,
//     lt = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     // 1           0
//     // 4           1
//     // 5           2
//     // 7           3
//     // 6           4

//     // rt값이 연속부분수열의 맨끝이다.
//     // 처음 rt만 움직이고 lt는 고정인 상태.
//     // 하나씩 늘리면서 sum이 m보다 커질 경우에 while문 거치는거임
//     while (sum > m) {
//       7 / 6;
//       // sum이 m보다 클 경우에만 동작함
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//     // 1
//     // 3
//     // 6
//     // 8
//     // 10
//     // answer = answer + (rt - lt + 1)
//     // 인덱스랑 그 값을 잘 구분하자
//   }
//   return answer;
// }
// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

//
//
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

//
//
// 학급 회장 / Hash Map
// // 흔히 사용했던 자료 구조가 아닌 Map을 사용한것임
// function solution(s) {
//   let answer = "";
//   let sh = new Map(); // new Map() = 맵 생성
//   for (let x of s) {
//     if (sh.has(x))
//       sh.set(
//         x, // 키
//         sh.get(x) + 1 // 값
//       );
//     // true 시 get을 사용해 가져온 x의 값 + 1 해서 저장해줄거임
//     // has(x) - x의 요소안에 key가 있는지 ? 불리언으로 반환
//     // set(key, value) key = k , value = get(x) + 1 // key를 이용해 value를 저장한다.
//     // get = key 에 해당하는 값을 반환한다. 없을 시 undefined 반환
//     else sh.set(x, 1); // false 시 키 x에 1의 값을 넣어줄거다
//   }
//   // sh 내부

//   // key = "B" 등 , val = 3 등 이런식으로 할당되는거임
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sh) {
//     // sh 자체가 key와 value를 가지고 있기 때문에 순회 가능
//     // 0 {"B" => 3}
//     // 1 {"A" => 3}
//     // 2 {"C" => 5}
//     // 3 {"D" => 2}
//     // 4 {"E" => 2}
//     if (val > max) {
//       max = val; // max , val 투표 숫자임.
//       answer = key; // 그 투표를 받은 C 라는 key가 answer로 들어가야함
//     }
//   }
//   return answer;
// }
// let s = "BACBACCACCBDEDE";
// console.log(solution(s));

// // Map , Set 찾아놓은거 여러번 보고 익히기

// // new Map() – 맵을 만듭니다.
// // map.set(key, value) – key를 이용해 value를 저장합니다.
// // map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
// // map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
// // map.delete(key) – key에 해당하는 값을 삭제합니다.
// // map.clear() – 맵 안의 모든 요소를 제거합니다.
// // map.size – 요소의 개수를 반환합니다.
// // 맵 + 해시 알고리즘 자체가 해시맵이다

//
//
// 아나그램 (Hash + Map)// // 아나그램 // 해쉬 + 맵
// // 2개이상의 문자열을 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어를 아나그램이라고 한다

// function solution(str1, str2) {
//   let answer = "YES";
//   let sh = new Map();
//   for (let x of str1) {
//     if (sh.has(x)) sh.set(x, sh.get(x) + 1);
//     else sh.set(x, 1);
//   }
//   // A 를 통과한 뒤 || B 실행
//   for (let x of str2) {
//     if (!sh.has(x) || sh.get(x) === 0) return "NO";
//     // A 조건 통과 후 || B조건 실행 / 둘다 통과 시 각자 지워준다
//     sh.set(x, sh.get(x) - 1);
//     // 각 문자의 갯수까지 확인해서 계산
//   }
//   return answer;
// }

// let a = "AbaAeCe";
// let b = "baeeACA";
// console.log(solution(a, b));
// map 메소드 잘 사용하고 값 저장해서 불러오기 , 비교하기

// // 어떻게 매칭이 되나 싶었지만 기존에 sh에 들어가게 위에서 설정해놨기 떄문에 매치가 되는거였음

//
//
//// 모든 아나그램 찾기 / 슬라이딩 윈도우 , 해시 맵 , 투 포인트 알고리즘
// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }

// function solution(s, t) {
//   let answer = 0;
//   let th = new Map();
//   let sh = new Map();

//   for (let x of t) {
//     if (th.has(x)) th.set(x, th.get(x) + 1);
//     else th.set(x, 1);
//   }

//   let len = t.length - 1;

//   for (let i = 0; i < len; i++) {
//     if (sh.has(s[i])) sh.set(s[i], sh.get(s[i]) + 1);
//     else sh.set(s[i], 1);
//   }

//   let lt = 0;

//   for (let rt = len; rt < s.length; rt++) {
//     if (sh.has(s[rt])) sh.set(s[rt], sh.get(s[rt]) + 1);
//     else sh.set(s[rt], 1);
//     if (compareMaps(sh, th)) answer++;
//     sh.set(s[lt], sh.get(s[lt]) - 1);
//     if (sh.get(s[lt]) === 0) sh.delete(s[lt]);
//     lt++;
//   }

//   return answer;
// }
// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));

//
// 올바른 문자열 (스택)
// // function solution(s) {
//   let answer = "YES";
//   stack = [];
//   for (let x of s) {
//     if (x === "(") stack.push(x); // 여는 괄호시 스택에 추가
//     else {
//       if (stack.length === 0) return "NO";
//       // 닫으려고 봤더니 없다 그러니까 여는 괄호가 안들어간 상태에서 닫는다면 "NO"
//       stack.pop(); // 있다면 pop 해줌
//     }
//   }
//   if (stack.length > 0) return "NO";
//   //  다 하고 나면 스택이 비워져야하는데 만약 1이라도 남아있다 하면 NO
//   return answer;
// }
// let a = "()()()()()()";
// console.log(solution(a));

//
//// // 괄호 문자 제거 (스택)
// function solution(s) {
//   let answer = "";
//   stack = [];

//   for (let x of s) {
//     if (x === ")") {
//       // 순회중 ")"얘를 만났다면
//       while (stack.pop() !== "("); // "(" 를 만나기전까지의 친구들은 다 지워준다.
//     } else stack.push(x); // while이 false가 되면 다 지웠따는거니까 push
//   }
//   answer = stack.join(""); // 문자열로 바꿔주고 할당
//   return answer;
// }
// let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(a));

//
//
// // 크레인 인형 뽑기(스택) 카카오 / 이차원 배열
// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     // pos 로 moves 순회
//     for (let i = 0; i < board.length; i++) {
//       // i 로 board 순회
//       if (board[i][pos - 1] !== 0) {
//         // pos -1 을 해주는 이유는 moves 배열의 값을 인덱스로 접근하기 때문임
//         // board[0][pos -1 = 0] 0이 아니라면

//         let tmp = board[i][pos - 1];
//         // tmp에 담는다

//         board[i][pos - 1] = 0;
//         // 담은 후에 0으로 그 자리를 0으로 만든다
//         if (tmp === stack[stack.length - 1]) {
//           // 담긴 tmp가   stack의 가장 최근 값과 같다면
//           stack.pop();
//           // stack의 최신값을 pop해준다.
//           answer += 2;
//           // 같은거 2개가 터지므로 answer+=2 해줌
//         } else stack.push(tmp);
//         // 다르다면 stack에 tmp 값을 넣어준다
//         break;
//         // 한번씩 로직이 돌았으면 pos가 다음 열을 탐색해야하는데
//         // break를 걸어주지 않으면 그 열을 다 끝내고 난 뒤에 도니까 한번씩 break 걸어줘야함
//       }
//     }
//   });
//   return answer;
// }

// let a = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];
// let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));

//
//
// 후위식 연산 352+*9- // 37*9- 219- // 12 // 스택 / 타입주의 / 변수 lt rt 연산
// function solution(str) {
//   let answer;
//   let stack = [];

//   for (let x of str) {
//     if (!isNaN(x)) stack.push(Number(x));
//     // 숫자가 아니냐에 !을 걸어줬으니 숫자가 맞냐 로 바뀜
//     // 문자열이 그대로 넘어온거기때문에 연산을 하려면 Number 타입으로 바꿔줘야함
//     // type 고려 ++
//     else {
//       let rt = stack.pop(); // pop 제거 + 값 가져오기
//       let lt = stack.pop();
//       if (x === "+") stack.push(lt + rt);
//       // 여기서의 연산은 이미 타입이 바뀐채로 push 됐으므로 상관없음
//       else if (x === "-") stack.push(lt - rt);
//       else if (x === "*") stack.push(lt * rt);
//       else if (x === "/") stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];

//   return answer;
// }

// let str = "352+*9-";
// console.log(solution(str));

//
//
// 쇠막대기 (스택) // 문제를 이렇게 사고할 수 있는게 중요함
// //www.acmicpc.net/problem/10799 문제

// function solution(s) {
//   let answer = 0;
//   let stack = []; // 스택만들기

//   for (let i = 0; i < s.length; i++) {
//     // 문자열 인덱스 갖고 돌기
//     if (s[i] === "(") stack.push(s[i]);
//     // s[i]의 값이 === 시작이라면 . 일단 스택에 푸시
//     else {
//       // 아니라면 ")" 임
//       stack.pop(); // 그럴때 스택 맨위값 제거 + 가져오기(가져오는건 딱히 의미x)
//       if (s[i - 1] === "(") {
//         // ) 인 상태에서 이전 값이 ( 얘라면
//         // ()가 되는거니 터지고 기존 스택에 쌓인 만큼 더해줌 레이저가 자른거니까
//         answer += stack.length;
//       } else answer += 1; // 아니라면 끝 막대기 이므로 +1
//     }
//   }

//   return answer;
// }
// let a = "()(((()())(())()))(())";
// console.log(solution(a));

//
//
// 공주구하기 (큐)
// // 먼저 들어온 데이터가 먼저 나가는 구조. 새치기 안됨
// function solution(n, k) {
//   let answer;
//   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   // {length: n} length:n 의 빈 배열이 생김 , (v, i)value , index value => i + 1 인덱스 + 1 만큼의 값을 할당
//   while (queue.length) {
//     // 0 = false // while = false 까지 계속 돔
//     for (let i = 1; i < k; i++) queue.push(queue.shift());
//     // k가 3 이라는 건 인덱스의 3번째가 아니라 1~8까지 왕자중에 왕자3이 간다는거임 즉 벨류 3임
//     // queue.push(queue.shift()) = 처음 동작 시 queue.shift() = 1 뺀걸 푸시하겠다는거임 1을 맨뒤로 보냄
//     queue.shift();
//     // 포문이 false가 되는 순간 얘 실행 걍 빼버림 얘는
//     // 인덱스때문에 빠지는게 아님 이미 1과 2가 빠져버렸기 때문에 다음 코드 실행이 shift인거임
//     // 이 코드가 실행되는 순간 와일문으로 다시 돌아감 => 즉 포문도 다시 실행 i=1로 할당 / 반복
//     if (queue.length === 1) answer = queue.shift();
//     // 돌고 돌다 queue.length ===1 이 라는건 마지막애가 남았다는거임 걔를 뽑아서 answer에 주면 됨
//   }
//   return answer;
// }
// console.log(solution(8, 3));

// // Array.from은
// // 유사 배열 객체(array - like object)나 반복 가능한 객체(iterable object)를 얕게 복사해
// // 새로운Array 객체를 만듭니다. (배열 형태임)
// // v = value , i = index / i+1 증가하는 인덱스에 +1을 더 해줌 제 자리에 값이 들어가게 함

// // shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

//
//// // 필수 과목의 순서만 잘못된게 아니라면 true / 필수과목의 순서가 꼬였다면 false
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

//
//
// 선택 정렬
// // idx = i 의 값을 넣고
// // j 포문이 돌면서 가장 작은 값을 idx = j 이 식으로 넣어줌

// function solution(arr) {
//   let answer = arr;
//   // 참조를 해주니까 arr의 값이 변하면 answer의 값도 변함

//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }

//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

//
//
// 버블 정렬 바로 옆의 숫자외 비교해서 맨 뒤로 보내고
// // 그 다음에 쭉 비교해서 뒤로 보내고
// // 쭉 뒤로 보내는 방법 // 구현은 가장 간단하지만 가장 비효율적임
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       // j가 돌면서 비교해나가는거임
//       // arr.length - 1 - i 번째 까지 도는 이유는 마지막 인덱스가 채워지면
//       // 다음 순회때는 거기까지 할 필요가 없기 때문임
//       if (arr[j] > arr[j + 1]) {
//         // ex) 13 > 5 랑 비교해서 0번째 13이 더 클 경우 자리 바꿔줌
//         // 그 다음은 13 이랑 11 비교 , 자리바뀌니까 13이랑 7비교
//         // 그런식으로 쭉쭉 바꿔나가서 마지막 자리 채워주고
//         // 다음 i 인덱스 1증가하니 그 전까지 j포문이 돌거임
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// let a = [13, 5, 11, 7, 23, 15];
// console.log(solution(a));

// //
//
//
// 버블정렬응용 / 음의 정수 양의 정수 기존 순서 변화없이
// 양과 음으로만 정렬하기
// 옆의 수와 비교해서 쭉쭉 밀고 나가는거

// function solution(arr) {
//   let answer = arr;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         // 둘다 음수 , 양수 일 경우를 방지해서 자리를 변경
//         // 음수 양수는 어차피 바뀌어야하니까 비교대상이 돼도 상관없음
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return answer;
// }

// let a = [1, 3, 2, -3, -2, 5, 6, -5];

// console.log(solution(a));

//
//
//// // 삽입정렬 / 시간복잡도 N^2 = 버블 정렬 = 선택 정렬 과 같음
// // 작은 수를 앞으로 삽입시키면서 정렬
// function solution(arr) {
//   let answer = arr;

//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i], //현재 arr[i] 값 11 을 tmp에 넣음
//       j; // arr[j+1] 스코프때문에 j 못 읽어오니까 한 단계 위에서 선언

//     for (let j = i - 1; j < 0; j--) {
//       // i-1 부터 시작해 0까지 i 앞에 있는 값 탐색
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       //
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }

//   return answer;
// }

// let a = [11, 7, 5, 6, 10, 9];

// console.log(solution(a));
