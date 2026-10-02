import './App.css'
import heroImg from './assets/hero.png'
import Example01 from './components/Example01.jsx'
import Example02 from './components/Example02.jsx'

// <>는 Fragment 라고 부르며, 여러개의 JSX를 묶어주는 역할을 한다.
// 태그를 병렬로 사용 불가 => div 사용 
// 컴포넌트는 함수 형식으로 만들고 첫글자는 대문자 => 테그 처럼 사용 - <MyButton />

function MyButton() {
  return (
    <button>See this list</button>
  )
}

function App() {

  const season = "Fall" // 변수 선언
  return (
    
    <div>
      <h2>Welcome to React!!</h2>
      {/* JSX 에서는 class 대신 className 속성을 사용*/}
      <h3 className = "welcome">Welcome to visit this site!</h3>
      <section>
        {/* 데이터 값(변수)을 표현식: {} 사용 */}
        {/* <p>Current season is {season}</p> */}
        {/* <img src={heroImg} alt="mainImage" width="300" /> */}
        {/* <MyButton /> */}
        <Example01 />
        <Example02 />
      </section>
    </div>
  )
}
// export 를 했기 때문에 main.jsx에서 import App from './App.jsx'로 불러올 수 있다!
export default App
