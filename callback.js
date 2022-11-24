// // 이부분이 콜백이 들어가지 않은 경우
// let user = {}
//
// function setUser(name) {
//     console.log(name);
//   setTimeout(() => {
//       console.log('set is starting')
//       user = {name: name}
//       return name;
//   },1)
// }
//
// setUser('test');
// console.log(user.name);

// 콜백을 통한 비동기 처리
function testFunction(name) {
    console.log(name)
}
let user = {}
function setUser(name, cb) {
    console.log('setUser start')
    setTimeout(() => {
        user = {
            name:name
        }
    }
    )
}

testFunction('abcde')