// 외부 컴포넌트 생성
// 조건부 렌더링

const Example01 = () => {
    const isLoggedIn = true; // 로그인 여부를 나타내는 변수

    let result = "";

    if(isLoggedIn){
        result = "login success";
    } else {
        result = "logged out";
    }

    return(
        <div>
            <h2>조건부 렌더링</h2>
            <p>{result}</p>
            {/* 삼항 연산자*/}
            {isLoggedIn ? <p>login success</p> : <p>logged out</p>}

            {/* && 연산자 사용 -> AND*/}
            {isLoggedIn && <p>login success</p>}
        </div>
    )
}

// 내보내기
export default Example01;