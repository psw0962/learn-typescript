// 별도의 값을 지정하지 않으면 전부 숫자형 이넘으로 취급(순서에 따라 1씩 증가)
enum ShoesNum {
    Nike,
    Adidas
}

console.log(ShoesNum.Nike); // 0
console.log(ShoesNum.Adidas); // 1

// 문자형
enum ShoesText {
    Nike = '나이키',
    Adidas = '아디다스'
}

console.log(ShoesText.Nike); // 나이키
console.log(ShoesText.Adidas); // 아디다스

// 이넘 활용 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: string) {
    if(answer === 'yes') {
        console.log('정답');
    }

    if(answer === 'no') {
        console.log('오답');
    }
}

askQuestion('yes');
askQuestion('y');
askQuestion('예스');
// 이 경우 인자 값의 조건이 명확히 주어지지 않고
// 인자(answer)의 타입을 string으로만 선언이 되어있기 때문에 에러의 소지가 있다.

// 이넘을 활용하면
function askQuestionEnum(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답');
    }

    if(answer === Answer.No) {
        console.log('오답');
    }
}

askQuestionEnum('Y'); // error
askQuestionEnum('yes'); // error
askQuestionEnum(Answer.Yes);