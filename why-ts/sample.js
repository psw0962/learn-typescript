// function sum(a, b) {
//   return a + b;
// }

// sum(10, 20);
// sum(10, '20');

// @ts-check

/**
 *
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
  return a + b;
}

// 타입을 확인해주지는 못하지만 @ts-check 통해 타입스크립트 파일의 효과를 줄 수 있다.
// sum(10, '20')
