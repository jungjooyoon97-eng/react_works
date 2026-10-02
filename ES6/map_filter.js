// map() - 배열의 각 요소를 변환하여 새로운 배열을 생성
const arr = [1, 2, 3] ;

// newArr = [2, 4 , 6]
const newArr = arr.map((x) => {return x * 2});

// 매게변수가 하나일 경우 이렇게 간단하게 나타낼 수 있음 
const simpleNewArr = arr.map(x => x * 2);

console.log(newArr);
console.log(simpleNewArr);

// 객체가 요소인 배열 -> 객체: {}, 배열-> []
const users = [
    {name: "Scott", age: 30},
    {name: "Terry", age: 35},
    {name: "John", age: 40}
];

console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);

// 배열에서 이름만 출력하고 싶음
const userNames = users.map((user) => {return user.name});
const simpleUserNames = users.map(user => user.name);
console.log(userNames);
console.log(simpleUserNames);


// filter() - 배열의 각 요소를 검사하여 조건에 맞는 요소만 새로운 배열로 반환
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 짝수만 출력하고 싶음
const evenNum = num.filter(n => n % 2 == 0);
console.log(evenNum);


// 나이가 35 이상인 사람만 출력
const olderUsersInfo = users.filter(user => user.age >= 35);
console.log(olderUsersInfo);

// 나이가 35 이상인 사람의 이름만 출력하고 싶음
const olderUsers = users.filter(user => user.age >= 35);
const olderUserNames = olderUsers.map(user => user.name);
console.log(olderUserNames);

// filter()와 map()을 한 번에 사용 가능
const combineOlderUserNames = users.filter(user => user.age >= 35).map(user => user.name);
console.log(combineOlderUserNames);


//foreach() - 배열의 각 요소를 순회하며 콜백 함수를 실행
const userNames2 = users.forEach(user => console.log(user.name));

// map = 반복 실행 + 반환값을 배열로 모으기
// forEach = 반복 실행만 하기
