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

function App() {
  let [items, setItems] = useState(data)
  let [photo, setPhoto] = useState(['/monitor.webp', '/mouse.webp', '/keyboard3.webp'])

  //css를 제공해주는 사이트 : bootstrap
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    
    </div>
    
  );
}

export default App;

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
