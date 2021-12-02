
interface Email {
  value: string;
  selected: boolean;
}

interface ProductNumber {
  value: number;
  selected: boolean;
}

interface TrueFalse {
  value: boolean;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

const trueFalse: TrueFalse[] = [
  { value: true, selected: true },
  { value: false, selected: false },
  { value: false, selected: false },
];

// 제네릭 타입을 활용하지 않으면 아래의 함수의 파라미터(item)의 타입을 바꿀 수 있는 함수선언도 여러번해야하고
// 위에 interface 선언도 여러번 하게 된다.
function createDropdownItem(item: Email | ProductNumber | TrueFalse) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});