var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T
  title: string;
}

var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

var detailItems: DetailedDropdown<string> = { // Dropdown의 제네릭에도 적용이 된다.
  value: 'hi', // string
  title: 'a',
  description: 'b',
  tag: 'hello' // string
}