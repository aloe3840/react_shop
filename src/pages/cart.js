import { Button, Table } from 'react-bootstrap'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeData } from '../store'

export default function Cart(){
  //등록된 슬라이스를 store에서 갖다쓴다 (리덕스)
  //useSelector로 slice 가져옴
  let slice1 = useSelector((state)=>{return state})
  console.log(slice1.slice1)

  let data = useSelector((state)=>{return state.slice2})
  console.log(data)

  //리덕스 슬라이스 변경 기능 변수화
  let dispatch = useDispatch()
  console.log(slice1.slice1)


  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>설명</th>
            <th>개수</th>
            <th>추가</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e, idx)=>{
              return(
                <tr>
                  <td>{idx+1}</td>
                  <td>{e.title}</td>
                  <td>{e.content}</td>
                  <td>1</td>
                  <td><Button>+</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}