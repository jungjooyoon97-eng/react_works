// 배열 구조 분해 할당
const arr1 = [1, 2];
console.log(arr1[0]);
console.log(arr1[1]);

// arr1 배열의 첫 번째 요소를 x에, 두 번째 요소를 y에 할당
const [x, y] = arr1;
console.log(`x: ${x}`);
console.log(`y: ${y}`);

// 객체 구조 분해 할당
const product = {
    pname: "무선키보드",
    price: 58000
}
console.log(product.pname);
console.log(product.price);

// product 객체의 pname 속성을 pname 변수에, price 속성을 price 변수에 할당
const {pname, price} = product;
console.log(`name: ${pname}`);
console.log(`price: ${price}`);