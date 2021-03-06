// 변수
// 정의: 하나의 갑승ㄹ 저장하기 위해 확보한 메모리 공강 자체, 메모리 공간을 식별하기 위해 붙인 이름

// 변수는 식별자와 값으로 구성되어 있다
var result = 30;
//    result -> 0x06669F913(메모리주소) [30] 메모리

// TIP: 자바스크립트의 경우 변수를 선언하고 할당하지 않으면 암묵적으로 undefined가 할당이 된다
var notJustified;
console.log(notJustified);

// undefined가 출력된다.

// js엔진은 변수선은을 다음과 같은 2단계에 거쳐 수행한다.
// 1. 선언단계; 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
// 2. 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

// 변수이름은 어디에 등록이 되는가
// 변수 이름을 비롯한 모든 식별자는 실행 컨텍스트에 등록이 된다. 실행 컨텍스트는 자바스크립트 엔진이 소스코드를 평가하고 실행하기위한
// 모든환경 및 실행결과를 관리하는 영역. 실행컨텍스트를 통해 식별자와 스코프를 관리한다.

// 선언되지 않은 식별자에 접근을 하는경우 Refference Error가 발생한다.

// console.log(notDefined);

// 변수 호이스팅

console.log(score);
var score = 30;
// java같은 경우라면 nullpoint exception 이 발생할것으로 보이나 JS의 경우 변수의 선언이 먼저 되므로 참조는 가능하다



