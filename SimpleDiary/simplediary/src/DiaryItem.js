import { useRef } from "react";
import { useState } from "react";

const DiaryItem = ({onEdit,onDelete,author,content,created_date,emotion,id}) =>{
    const [isEdit,setIsEdit] = useState(false); //수정중인지 아닌지
    const toggleIsEdit = () => setIsEdit(!isEdit) //원래 isEdot값을 반전시킴
    const localContentInput = useRef();

    const [localContent,setLocalContent] = useState(content); //수정에 사용될 content

    const handleRemove = () =>{
        if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }

    const handleQuitEdit = () => { //수정상태에서 나감
        setIsEdit(false);
        setLocalContent(content);
    }

    const handEdit = () => {
        if(localContent.length <5){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
            onEdit(id,localContent);
            toggleIsEdit();
        }
    }
    
    return (
        <div className="DiaryItem">
            <div className="Info">
                <span>작성자: {author} | 감정점수: {emotion}</span><br/>
                <span className="date">
                    {new Date(created_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {isEdit ? (<><textarea ref={localContentInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}/></>):(<>{content}</>)}
            </div>
            {isEdit?(<><button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handEdit}>수정완료</button></>
            ):(
            <><button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button></>)}
        </div>
    );
}

export default DiaryItem;