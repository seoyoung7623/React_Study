import {Route,Routes,Link} from 'react-router-dom';

import About from './About';
import Home from './Home';
import React from 'react';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <>
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/*' element={<Profiles/>} />
        <Route path='/history' element={<HistorySample/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
 