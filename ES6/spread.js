// 스프레드 연산자 - ... 사용!
// 배열에서 사용`
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 배열을 펼쳐서 새로운 배열을 생성
let newArr = [...arr1, ...arr2];
console.log(newArr);

// 객체에서 사용
let obj1 = {product: "무선마우스", price: 32000};
let obj2 = {spec: "블루투스", color: "black"};
let obj3 = {...obj1, ...obj2};
console.log(obj3);

// 객체 복사
let obj4 = {...obj3};
console.log(obj4);