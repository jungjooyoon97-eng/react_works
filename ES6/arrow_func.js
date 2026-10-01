// arrow function
// 제곱수 계산
/*
let square = function(x) {
    return x*x;
}

console.log(square(3));
*/

/*
let square2 = (x) => {
    return x*x;
}

console.log(square2(3));
*/


// 코드가 한 줄일 때 {}블럭과 return 생략 가능
// 매개변수의 소괄호 () 생략 가능
let square2 = x => x*x;
console.log(square2(3));

//매개변수가 없는 함수 - 소괄호 생략 불가
let message = () => console.log("Hello World!!!!");
message();