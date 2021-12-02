interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

const tony = introduce();
console.log(tony.skill); // error | (유니온 타입) 이기때문에 공통된 속성만 접근 가능

// 타입 단언 사용
if((tony as Developer).skill) {
    console.log((tony as Developer).skill);
} else if((tony as Person).age) {
    console.log((tony as Person).age);
}
// 하지만 중복적으로 단언을 계속 사용하게 됨
// 타입 가드를 활용하면 나은 코드를 작성할 수 있다.

// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}