// 제어문(Control Flow Statement)

// 1. 코드는 일반적으로 위에서 아래로 순차적으로 실행이 된다.
// 2. 제어문을  사용하면 코드의 실행 흐름을 인위적으로 제어할수 있다.
// 3. 하지만 코드의 실행순서를 바꾸는 것은 스파게티 코드가 될수 있고 가독성을 해칠수 있다.
// 4. 추후에는 foreach, map, filter, reduce와 같은 고차함수를 이용한 함수형 프로그래밍 ㄷ기법에서는 제어문의 사용을 억제하여 복잡성을 해결하려고 노력하자


// 블록문
// 1. 블록문은 0개 이상의 문을 중괄호로 묶은것으로 코드블록 또는 블록이라고 부른다.
// 2. 자바스크립트는 블록문을 하나의 실행단위로 취급한다.
// ex) 블록문
{
  let foo = 1;
}

// ex)제어문
let x = 0;
if(x <0) {
  x++;
}

//함수 선언문
function sum(a,b) {
  return a+b;
}

// switch 문
// switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.
// case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 드 뒤에 실행할 문들을 위치시킨다.
// switch 문의 표현식과 일치하는 case 문이 없다면 실행 순서는 default 문으로 이동한다. default 문은 선택 사항으로, 사용할수 있고 사용하지 않을 수도 있다.

/**
 * switch (표현식) {
 *     case 표현식1:
 *     switch 문의 표현식과 표현식1이 일치하면 실행시킬 문;
 *     break;
 *     case 표현식2:
 *     switch 문의 표현식과 표현식1이 일치하면 실행시킬 문;
 *     break;
 *     default:
 *     switch 문의 표현식과 일치하는 case 문이 없을 때 실행시킬 문;
 * }
 */

// 예제 about month
let month = 11;
let monthName;

switch(month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'Februry';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'invalidMonth'
}

console.log(monthName);