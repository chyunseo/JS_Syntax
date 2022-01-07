// const beast = ['ant', 'camel', 'duck', 'bison', 'bison'];

// console.log(beast.indexOf('duck'));

// indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.
// indexOf의 두번째 인자에는 요소의 위치(position, [0], [1], ...)가 들어간다.

let indices = [];
const array = ['a', 'b', 'c', 'a', 'b'];
const element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);
