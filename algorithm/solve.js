// 최솟값;
// function solution(a, b, c) {
//   let answer;
//   if (a < b) {
//     // 값 비교 , 할당
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
//
//

// 학생 수 연필 총 몇다스가 필요한지 ?
// function solution(n) {
//   let answer = Math.ceil(n / 12);
//   return answer;
// }
// console.log(solution(128));
// n / 12 하면 나오는 몫 + 나머지 를 무조건 올림(ceil) 해서 answer에 할당
//
//

// 1부터 입력 받은 수 까지의 총 합 ?
// function solution(n) {
//         let answer = 0;
//         for (let i = 1; i <= n; i++) { // let i = 1 로 설정 , i가 n까지 1씩 증가하면서 for문 실행
//           answer = answer + i;  // 초기값 0인 answer에  i = 1 더해주고 포문 돌면서 하나씩 증가한 값 더 해주기
//         }
//         return answer;
//       }
//       console.log(solution(100));
//

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
//
//

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
//
//
//

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
//
//

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
//
//

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
//
//

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
//
//

//
//
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
//
//

//가장 긴 문자열 출력

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
//
//
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
//
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
//
//

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

// 실패코드
// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) answer.push(arr[i + 1]);
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
