interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let developer: Developer;
let person: Person;

developer = person // 구조적으로 developer가 갖고 있는 속성이 많기 때문에 호환 X;
person = developer // 반대의 경우는 가능하다.

// 타입 호환 - 제네릭
interface Empty<T> {
    // ..
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1; // Empty 인터페이스에서 선언된 속성이 없기 때문에 호환이 가능 하다고 인식

interface NotEmpty<T> {
    data: T;
}

let noempty1: NotEmpty<string>;
let noempty2: NotEmpty<number>;
noempty1 = noempty2;
noempty2 = noempty1; // Empty 인터페이스에서 선언된 속성이 있을 경우 호환이 불가능 하다고 인식