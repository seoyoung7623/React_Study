import React from 'react';
import styled from 'styled-components';

const TodoTitle = styled.div`
    h1{
        margin-top: 20px;
        font-size: 36px;
        color: #343a40;
        text-align: center;
        font-weight: bold;
    }
`;

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 80px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    
`;

function TodoTemplate({children}){
    return(
        <>
        <TodoTitle><div className='page-header'><h1>TO DO LIST!</h1></div></TodoTitle>
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
        </>
    );
}

export default TodoTemplate