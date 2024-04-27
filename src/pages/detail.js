import { Button, Col, Container, Row } from 'react-bootstrap';
import './detail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailPage(props){

  //컴포넌트는 return으로 화면을 그린다(jsx)
  //url파라미터를 useParams()로 받는다 (상세페이지의 id번호) 0, 1, 2
  let {id} = useParams()
  let [hideDom, setHideDom] = useState(false) //처음에는 보이게
  //선택된 아이템인지 식별(item의 id와 url파라미터의 id가 같은지 검사)
  let seletedItem = props.items.find((e)=>{
    return e.id == id
  })

  //useEffect: 오래 걸리는 작업을 처리할 때
  //리액트의 컴포넌트 라이프사이클 (생성될 때, 갱신될 때, 없어질 때) : 각 라이프사이클마다 코드를 실행
  //mount: 생성될 때 update: 갱신될 때 unmount: 없어질 때
  useEffect(()=>{
    //mount와 update시에 실행될 코드
    //html을 먼저 보여주고 오래 걸리는 작업을 처리 (서버요청 등...)
    console.log('mount')

    setTimeout(()=>{
      //2초 후에 동작할 코드
      setHideDom(true)
    }, 2000)

    //unmount에 대해서는 return에 작성
    return(()=>{
      console.log('unmount')
    })
  })

  return(
    <>
    <Container/>
    {
      hideDom === false ? (
        <div>Hello</div>
      ) : null
    }
      <Row>
        <Col>
          <img src={props.img[seletedItem.id]} width={'200px'}/>
        </Col>
        <Col>
          <h4>{seletedItem.title}</h4>
          <p>{seletedItem.content}</p>
          <p>{seletedItem.price} 원</p>
          <button>주문하기</button>
        </Col>
      </Row>
    </>
  )
}