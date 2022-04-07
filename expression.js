// 표현식

// 값 (value)은 표현식 (expression) 이 평가(evaluate)되어 생성된 결과를 맗판다.

// 문 (sdtatement)

// statement는 프로그램을 구성하는 기본 단위이자 최소 실행 단위다.
// 문은 여러 토큰으로 구성된다. 토큰이란 문법적인 의미를 가지며, 문법적으로 더이상 나눌수 없는 코드의 기본 요소를 의미한다.
// 예를 들어, 키워드, 식별자, 연산자, 리터럴, 세미콜론이나, 마침표 등의 특수기호는 문법적인 의미를 가지며, 문법적으로 더이상 나눌 수 없는 코드의 기본 요소이므로 모두 토큰이다.

// 세미콜론 (semi colon)
// 세미콜론은 문의 종료를 나타낸다. 즉 js엔진은 세미콜론으로 문이 종료된 위치를 파악하고 순차적으로 하나씩 문을 실행
// js의 경우 세미콜론이 생략된 경우에도 알아서 붙여주긴한다.

function foo () {
    return;
}