const arraySparse = [1, 3, 7, 10];
let numCallbackRuns = 0;

arraySparse.forEach(function(number) {
    console.log(number);
    numCallbackRuns++;
})

console.log(`numCallbackRuns: ${numCallbackRuns}`);

// foreach : 주어진 함수를 배열 요소 각각에 대해 실행합니다.