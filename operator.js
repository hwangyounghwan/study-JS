// 연산자 (Operator)

//연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행해 하나의 값을 만든다.
//이때 연산의 대상을 피연산자라 한다.

// 산술 연산자
  5 * 4 // -> 20

// 문자열 연결 연산자
  'My name is' + 'Lee' //  -> 'My name is Lee'

// 할당 연산자
  var Color = 'red';

// 비교 연산자
  3 > 5 // -> false;

// 논리 연산자
  true && false // -> false;

// 타입 연산자
  typeof 'hi' // -> String

// 피연산자가 값의 역할을 한다면 연산자는 피연산자를 연산하여 새로운 값을 만든다 라는 동사의 역할을 한다고 볼 수 있다.

// 대소 비교 연산자
//1. === 은 타입과 값 전부 비교한다.
//2. == 은 값만 비교하게된다

//ex 5 == 5; -> true;

// 5 == '5' -> true;
console.log ('5 == 5')
console.log (5 == 5); // -> true;

console.log("5 == '5'")
console.log(5 == '5'); // -> true;

// 동등 비교, 결과를 예측하기 어렵다.

console.log("'0' == ''");
console.log ('0' == ''); // -> false;

console.log("0 == ''");
console.log(0 == ''); // -> true;

console.log("false == 'false'")
console.log(false == 'false');
console.log("false == null");
console.log(false == null);

//Object.is 메서드
// ES6에서 도입된 Object.is 메서드는 다음과 같이 예측 가능한 정확한 비교값을 반환한다. 그외에는 일치 비교 연산자와 동일하게 동작한다.
//ex
console.log (-0 === +0); // -> true
console.log(Object.is(-0, +0)); // -> false

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));

// 연산자 우선순위
// 연산자 우선순위란 여러 개의 연산자로 이루어진 문이 실행될때 연산자가 실행되는 순서를 말한다. 우선순위가 높을수록 먼저 실행된다. 연산자의 순위는 다음과 같다.

//1. ()
//2. new(매개변수 존재), [](프로퍼티 접근), ()(함수 호출), ?.(옵셔널 체이닝 연산자)
//3. new(매개변수 미존재(,
//4. x++, x--
// 그외 기타등등

