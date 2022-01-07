const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`Hello ${paragraph.lastIndexOf(searchTerm)} of ${searchTerm}`);

// lastIndexOf : 주어진 값과 일치하는 부분을 fromindex로부터 역순*으로 탐색하며, 최초로 마주치는 인덱스를 
// 반환합니다. 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.