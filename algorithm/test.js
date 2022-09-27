// 뒤집었을때 소수 구하기.
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    // 뒤집는 방법 1

    let res = Number(x.toString().split("").reverse().join(""));
    // parseInt 대신 Number 화 시켜버리기

    // 뒤집는 방법 2
    // let res = 0;
    // while (x) {
    //   let t = x % 10;

    //   res = res * 10 + t;

    //   x = parseInt(x / 10);
    // }
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 3, 100];
console.log(solution(arr));

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
