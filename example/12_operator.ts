 // | (or) 연산자를 사용해 여러 타입을 선언할 수 있다.
 // | (or) 연산자를 이용해 타입을 선언하는 방법을 유니온타입 이라고 한다.
let seho: string | number | boolean;

function logMessage(value: number | string) {
    if(typeof value === 'number') {
        value.toLocaleString(); // 해당 조건문을 통해 number의 메소드를 바로 볼 수 있다.
    }

    if(typeof value ==='string') { // 이와 같은 형태를 타입 가드라고도 부른다.
        value.toString();
    }

    throw new TypeError('value must be number or string');
}

logMessage(100);
logMessage('hi');

// 유니온 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeoneUnion(someone: Developer | Person) {
    someone.name // 공통된 속성만 접근할 수 있다.
}

// & (and) 연산자를 사용해 타입을 선언하는 방법을 인터섹션 타입이라고 한다.
let a: string | number | boolean;
let b: string & number & boolean; // 불가능한 타입

function askSomeoneIntersection(someone: Developer & Person) {
    someone.name // 유니온 타입과 다르게 공통된 속성외에도 모두 접근 가능하다.
    someone.age 
    someone.skill
}

// 유니온 타입과 인터섹션 타입의 차이점

// 유니온 타입
askSomeoneUnion({ name: 'deveoper', skill: 'web dev'}); // 하나의 인터페이스 속성만 맞게 넣어주면 OK
askSomeoneUnion({ name: 'tom', age: 20});

// 인터섹션 타입
askSomeoneIntersection({ name: 'deveoper', skill: 'web dev' }) // 두 개의 타입의 속성을 모두 포함해야 한다.
askSomeoneIntersection({ name: 'deveoper', age:30, skill: 'web dev' })