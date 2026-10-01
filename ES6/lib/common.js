// 두 수의 합 계산 함수
let add = (x, y) => x + y;

// 절댓값 계산
let myAbs = (x) => {
    if (x < 0)
        return -x;
    else
        return x;
}

// 모듈로 내보내기
module.exports = {add, myAbs};
