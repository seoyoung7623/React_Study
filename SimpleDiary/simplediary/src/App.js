import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data,setData] = useState([]);

  const dataId = useRef(0)

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json());
    
    const initData = res.slice(0,20).map((it)=>{
      return{
        author:it.email,
        content:it.body,
        emotion:Math.floor(Math.random()*5)+1,
        created_date:new Date().getTime(),
        id:dataId.current++
      }
    })

    setData(initData); //수정사항 test
  }

  useEffect(()=>{
    getData();
  },[]) //탄생 mounte

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem,...data]);
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId,newContent) => {
    setData(
      data.map((it) => 
      it.id === targetId ? {...it,content:newContent}:it)
    );
  };

  const getDiaryAnalysis = useMemo(() =>{
    console.log("일기 분석 시작!");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount/data.length) * 100;
    return {goodCount,badCount,goodRatio}; //memo를 사용하는 이유 부분 = 최적화
  },[data.length] //data.length가 변화할때만 usememo를 사용하게 됨.
  ); //->이는 함수가 아님 값을 리턴 받음 값이 된다.

  const {goodCount,badCount,goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}</div>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList = {data}/>
    </div>
  );
}

export default App;
