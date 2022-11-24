//async/await

//async/await는 프로미스를 기반으로 동작한다. async/await을 사용하면 프로미스의  then/catch/finally 후속 처리 메서드에
// 콜백 함수를 전달해서 비도익 처리 결과를 후속 처리 할 필요가 없이 마치 도익 처리처럼 프로미스를 사용할수 있다.

const fetch = require('node-fetch');

async function fetchTodo() {
    console.log('fetchstart');
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = await fetch(url);
    console.log(response);
    const todo = await response.json();
    console.log(todo);
}

fetchTodo();