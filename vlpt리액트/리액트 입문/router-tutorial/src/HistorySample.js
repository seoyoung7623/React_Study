import { useNavigate } from 'react-router-dom'; //중요!

function HistorySample(){
    const navigate = useNavigate(); //history역할
    const goBack = () => {
        const confirm = window.confirm('정말 떠나시겠어요?') //메시지 박스
        if(confirm) {
            navigate(-1);
        }
    };

    const goHome = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );

    // const goHome = () => {

    // }
}
export default HistorySample;


// import { useNavigate } from 'react-router-dom';

// function HistorySample() {
//    const navigate = useNavigate();
//    const goBack = () => {
//    const confirm = window.confirm('정말 떠나시겠어요?')
//    if (confirm) {
//       navigate(-1);
//     }
//   };

// const goHome = () => {
//     navigate('/');
//   }
//   return (
//     <div>
//       <button onClick={goBack}>뒤로가기</button>
//       <button onClick={goHome}>홈으로</button>
//     </div>
//   );
// }