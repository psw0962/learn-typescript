function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}

// 유니온 타입의 선언 방식의 문제점
function logText(text: string | number) {
  console.log(text);
  return text;
}

logText('a').split // 문자열을 리턴하는데도 불구하고 관련 메소드를 사용할 수 없다.
// 그 이유는 위에서 text 파라미터의 타입 선언을 string | number 로 선언했고
// text 파라미터는 두 타입의 공통된 메소드만 활용할 수 있기 때문이다.
// 이와 같은 한계점을 극복할 수 있는 것이 제네릭이다.