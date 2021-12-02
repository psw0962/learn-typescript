// 여러번 했던 타입정의를 제네릭 문법을 통해 인자로 타입을 선얼할 때 마다 변경할 수 있다.
interface DropDownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropDownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropDownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

const trueFalse: DropDownItem<boolean>[] = [
  { value: true, selected: true },
  { value: false, selected: false },
  { value: false, selected: false },
];

// 함수를 선언할 때에도 제네릭 문법을 사용하면 파라미터로 받는 타입을 함수를 호출하는 시점에서 선언할 수 있다.
function createDropdownItem<T>(item: DropDownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 함수를 호출하는 시점에서 타입을 선언하여 하나의 인터페이스를 활용하여 여러 타입을 선언할 수 있다.
createDropdownItem<string>({ value: 'test', selected: true });
createDropdownItem<number>({ value: 10, selected: false });

// 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email); // 함수를 선언할 때 타입도 같이 선언
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});