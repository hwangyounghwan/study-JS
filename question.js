const quest = [2,2,3,3,4,4,4,5,5,6,6,6,6,7,7,8,8,8,8,9,9,9,10,10,10,10]

// 정답 빈 배열 넣기
let answer = [];
// quest 배열을 순회하여 같은것이 있는지 확인
for(let i = 0; i < quest.length; i++){
    let temp = quest[i];
    let index = 0;
    for(let j = 0; j < quest.length; j++){
        // quest[i] == quest[j]인 경우 index ++
        if(i!=j && quest[i] == quest[j]){
            index ++;
        }
    }
    // index ++ 하여 한개만 추가된 경우
    if(index == 1) {
        answer.push(quest[i]);
    }
    // index 초기화
    index = 0;
}

console.log(answer);