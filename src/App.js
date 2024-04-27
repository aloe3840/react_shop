import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cat from './cat5.jpg';
import data from './data';
import { useState } from 'react';
import DtailPage from './pages/detail';
import {Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom'
import DetailPage from './pages/detail';
import { Button } from 'react-bootstrap';

//라우터는 창을 새로 불러오는 게 아니라 재렌더링 방식을 사용
//html은 href="" 사용 -> 리액트는 라우터 사용
function App() {
  let [items, setItems] = useState(data)
  let [photo, setPhoto] = useState(['/monitor.webp', '/mouse.webp', '/keyboard3.webp', '/logo192.png'])
  let navigate = useNavigate()

  //css를 제공해주는 사이트 : bootstrap
  return (
    <div className="App">
              <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand href="#home"><img src='/logo192.png' width={'50px'}/></Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
                    <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
                    <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className={'main-bg'}></div>
            <Container>
              {/* 데이터 갯수와 이미지가 바뀔 수 있으니 useState처리 */}
              {/* map을 통해서 useState(data)만큼 반복 */}
              <Row>
              {items.map((item, idx) => (
              <ItemColor key={idx} data={item} img={photo[idx]} />
            ))}
              </Row>
            </Container>
          </>

          //페이지를 다시 그려주고 싶다면(재렌더링) Route
        }></Route> 

        <Route path='/detail/:id' element={<DtailPage items={items} img={photo}/>}></Route>
        {/* <Route path='/detail/0' element={<DetailPage items={items} id={0}
        img={photo}/>}></Route>
        <Route path='/detail/1' element={<DetailPage items={items} id={1}
        img={photo}/>}></Route>
        <Route path='/detail/2' element={<DetailPage items={items} id={2}
        img={photo}/>}></Route> */}

        <Route path='/about' element={<AboutPage/>}>
          <Route path='adress' element={<div>주소</div>}></Route>
          <Route path='location' element={<div>위치</div>}></Route>
        </Route>
        <Route path='/about/member' element={<div>어바웃멤버페이지</div>}></Route>
        <Route path='*' element={<div>그외의 페이지(404)</div>}></Route> 
        {/* 페이지를 잘못 갔을 때 *로 예외처리 느낌임 */}
      </Routes>

      {/* React는 하나의 html을 다시 그리는 방식이기 때문에
      html을 이동하는 <a>태그보단 <Link>를 사용 */}
      <Link to="/about/adress"><Button variant="success">리액트 부트스트랩 버튼</Button></Link>
    </div>
    
  );
}

export default App;


//어바웃 페이지의 컴포넌트
function AboutPage(){
  return(
    <>
      <div>
        <h4>어바웃 페이지</h4>
        <Outlet/>
      </div>
    </>
  )
}

//컴포넌트 앞글자는 대문자
//return에 html(jsx)코드
//컴포넌트로 분리했으면 props로 받아와야하는 부분을 변경
function ItemColor(props){
  //사용하는 곳에서 결정해줘야 하는 부분(그때그때 바뀌는 부분)만 props 처리
  return(
    <>
      <Col>
        <img src={props.img} width={'200px'} height={'150px'}/>
        <h4>{props.data.title}</h4>
        <p>{props.data.price} 원</p>
      </Col>
    </>
  )
}
