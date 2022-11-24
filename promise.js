// 프로미스

/**
자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 하지만 전통적인 콜백 패턴은 콜백 패턴은
콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며 여러 개의 비동기 처리를 한번에 처리하는 데도
한계가 있다.
**/

// 비동기 처리를 위한 콜백 패턴의 단점
let XMLHttpRequest = require('xhr2');
//
//const get = url => {
//    const xhr = new XMLHttpRequest();
//    xhr.open('GET', url);
//    xhr.send();
//
//    xhr.onload = () => {
//        if(xhr.status === 200) {
//            console.log(JSON.parse(xhr.response));
//        } else {
//            console.error(`${xhr.status} ${xhr.statusText}`);
//        };
//    };
//
//    return JSON.parse(xhr.response)
//};
//
//get('https://jsonplaceholder.typicode.com/posts/1');

// 위의 코드를 실행하면 제대로 찍힌다
// 그런데 이걸 일부러 return해서 밖으로 값을 꺼내려고 하면 제대로 찍히지 않는다.

//let g = 0;
//
//// 비동기 함수인 setTimeout 함수는 콜백 함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하지 못한다.
//setTimeout(() => { g = 100; }, 0);
//console.log(g); // 0;


//const get = url => {
//    const xhr = new XMLHttpRequest();
//    xhr.open('GET', url);
//    xhr.send();
//    xhr.onload = () => {
//        if (xhr.status === 200) {
//            // ① 서버의 응답을 반환한다.
//            return JSON.parse(xhr.response);
//        }
//        console.error(`${xhr.status} ${xhr.statusText}`);
//    };
//};
//// ② id가 1인 post를 취득
//const response = get('https://jsonplaceholder.typicode.com/posts/1');
//console.log(response); //undefined

//get 요청을 위한 비동기 함수

// const get = (url, callback) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', url);
//     xhr.send();
//
//     xhr.onload = () => {
//         if(xhr.status === 200) {
//             callback(JSON.parse(xhr.response));
//         } else {
//             console.error(`${xhr.status}  ${xhr.statusText}`);
//         };
//     };
//
// };
//
// const url = 'https://jsonplaceholder.typicode.com';
// get(`${url}/posts/1`,({userId}) => {
//     console.log(userId);
//     get(`${url}/users/${userId}`,userInfo => {
//         console.log(userInfo);
//     });
// });
//

//ㅂㅣ동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러 처리가 곤란하다는 것이다. 다음 예제를 살펴보자.

// try {
//     setTimeout(() => {throw new Error('error occurred')}, 1000);
// } catch (e) {
//     console.error('캐치한 에러',e)
// }

// 프로미스의 생성
// promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스 객체를 생성한다. ES5에서 도입된 Promise는 호스트 객체가 아닌
// ECMAScript 사야에 정의된 표준 빌트인 객체다.

// promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받는다.


// const promise = new Promise((resolve, reject) => {
//     /**非同期処理成功**/
//     if(200) {
//         resolve('result');
//     } else {
//         reject('error occurred');
//     }
//
// });

// promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 비동기 처리를 수행한다. 이때 비동기 처리가 성공하면 콜백 함수의
// 인수로 전달받은 resolve 함수를 호출하고, 비동기 처리가 실패하면 reject 함수를 호출한다. 아에서 살펴본 비동기 함수 get을 프로미스
//를 사용해 다시 구현해보자

// const promiseGet = url => {
//     return new Promise ((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',url);
//         xhr.send();
//         xhr.onload = () => {
//             if(xhr.status == 200){
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(new Error(xhr.status));
//             }
//         }
//     })
// }
//
// promiseGet('https://jsonplaceholder.typicode.com/posts/1')
//     .then(result => {console.log(result);})
//     .catch(error => {console.error(error);}
//     );

// fetch
// fetch 함수는 XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 WEB API다.
// fetch 함수는 XMLHttpRequest 객체보다 사용법이 간단하고 프로미스를 지원하기 때문에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.
// fetch 함수는 비교적 최근에 추가된 Web API로서 인터넷 익스플로러를 제외한 대부분의 모던 브라우저에서 제공된다.
// fetch 함수에는 HTTP 요청을 전송할 URL과 HTTP 요청 메서드. HTTP 요청 ㅎ더, 페이로드등을 설정한 객체를 전달한다

// const promise = fetch('https://jsonplaceholder.typicode.com/posts/1')
//                     .then(response => response.json())
//                     .then(json =>console.log(json));


const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload) {
        return fetch(url, {
            method: 'PATCH',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(payload),
        })
    },
    delete(url) {
        return fetch(url, {method: 'DELETE'});
    },
};

request.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => console.log(result));

