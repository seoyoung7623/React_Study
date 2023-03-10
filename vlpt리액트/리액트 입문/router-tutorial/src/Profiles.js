import { Link, Route,Routes } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (//현재 profile주소에 위치해 있음
      <div>
        <h3>유저 목록:</h3>
        <ul>
          <li>
            <Link to="/profiles/seoyoung">seoyoung</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">gildong</Link>
          </li>
        </ul>
            <Routes>                
                <Route path='/' element='유저를 선택해주세요' /> 
                <Route path=':username' element={<Profile/>} />
            </Routes>
            <WithRouterSample />
        </div>
    )
}

export default Profiles;