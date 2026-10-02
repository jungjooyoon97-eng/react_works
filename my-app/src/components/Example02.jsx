// list(배열) 렌더링
const Example02 = () => {
    const items = ["사과", "바나나", "포도", "딸기", "수박"]

    return (
        <div>
            <h2>리스트 렌더링</h2>
            <ul className="list">
                {items.map((item, index) => (
                    // key 속성은 React가 어떤 항목이 변경, 추가 또는 제거되었는지 식별하는 데 도움을 준다.
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

// 내보내기
export default Example02;