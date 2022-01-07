const words = ['spray', 'limit', 'elite', 'exbrant', 'destruction', 'present', 'helloo'];

const result = words.filter(word => word.length > 6);

// result에 words(word로 치환)의 길이가 6보다 큰 것을 모아 배열으로 저장ㅏ

console.log(result);

// filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.



// function inBigEnough(value) {
    // return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(inBigEnough);
