//리덕스로 state값을 보관할 파일
//props없이 state를 공유할 수 있음
//1. 리덕스 설치
//2. state값 저장할 store.js생성
//3. index.js를 <App/>을 <Provider>로 감싸줌
import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./data";


//useState => createSlice(리덕스)
let slice1 = createSlice({
  name: '이름',
  initialState: '초기값',
  reducers:{
    //리덕스에 등록된 슬라이스 값을 변경하고자 하면 store에서 변경하는 함수로 등록, 사용하는 곳에서 그 함수를 사용하는 식으로 변경
    changeData(state, actions){
      //state: 기존의 initalState값이 들어있음
      //actions: 매개변수로 넘긴 값이 들어있음, payload를 붙여줘야함
      //return에 변경하고자 하는 값을 적어줌
      return '슬라이스 변경' + state + actions.payload
    }
  }
})

//slice1을 변경하는 함수를 내보낸다 (useDispatch로 사용)
export let {changeData} = slice1.actions

let slice2 = createSlice({
  name: '이름', 
  initialState: data
})

export default configureStore({
  reducer: 
  {
    //스테이트를 다른 곳에서 사용할 수 있게 등록하는 곳
    slice1 : slice1.reducer,
    slice2 : slice2.reducer,
    reducer:{
      //기존의 data를 수정할 함수
      
    }
  }
})