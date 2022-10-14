// 삽입정렬 / 시간복잡도 N^2 = 버블 정렬 = 선택 정렬 과 같음
// 작은 수를 앞으로 삽입시키면서 정렬
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i-1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1] && arr[j - 1] < arr[j + 1]) 
    }
  }

  return answer;
}

let a = [11, 7, 5, 6, 10, 9];
console.log(solution(a));
