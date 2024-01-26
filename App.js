import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import addfields from './components/addfields';
import displayfields from './components/displayfields';

const App=()=> {
  return (
    <Router >
    <div >
        <nav>
          <ul>
            <li>
              <Link to='/add'>Add Fields</Link>
            </li>
            <li>
              <Link to='/display'>Display Fields</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' component={ <addfields/>}></Route>
          <Route path='/display'component={<displayfields/>}></Route>
        </Routes>
    </div>
    </Router>
  );
};

export default App;
