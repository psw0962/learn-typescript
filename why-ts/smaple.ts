function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 20);
result.toLocaleString(); // 결과 값의 타입에 따라 해당 타입의 메소드를 사용할 수 있게 알려준다.
// add(10, '20');
