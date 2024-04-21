import { Button, Col, Container, Row } from 'react-bootstrap';
import './detail.css';

export default function DetailPage(props){
  return(
    <>
    <Container/>
      <Row>
        <Col>
          <img src='/monitor.webp' width={'200px'}/>
        </Col>
        <Col>
          <h4>{props.items[0].title}</h4>
          <p>{props.items[0].content}</p>
          <p>{props.items[0].price} 원</p>
          <button>주문하기</button>
        </Col>
      </Row>
  {/* <Row>
        <Col>
          {
            items.map((item, idx)=>{
              <ItemColor key={idx} data={item}/>
            })
          }
        </Col>
        <Col>
          {
            items.map((item, idx)=>{
              <ItemColor key={idx} img={photo[idx]}/>
            })
          }
        </Col>
      </Row> */}
    </>
  )
}