import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ES6 from './ES6/ES6';
import ES7 from './ES7/ES7';
import ES8 from './ES8/ES8';
import ES9 from './ES9/ES9.jsx';
import ES10 from './ES10/ES10';
import ES11 from './ES11/ES11';
import ES12 from './ES12/ES12';
import ES13 from './ES13/ES13';
import ES14 from './ES14/ES14';
import ES15 from './ES15/ES15';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>ES6</Link>
            </li>
            <li>
              <Link to='/ES7'>ES7</Link>
            </li>
            <li>
              <Link to='/ES8'>ES8</Link>
            </li>
            <li>
              <Link to='/ES9'>ES9</Link>
            </li>
            <li>
              <Link to='/ES10'>ES10</Link>
            </li>
            <li>
              <Link to='/ES11'>ES11</Link>
            </li>
            <li>
              <Link to='/ES12'>ES12</Link>
            </li>
            <li>
              <Link to='/ES13'>ES13</Link>
            </li>
            <li>
              <Link to='/ES14'>ES14</Link>
            </li>
            <li>
              <Link to='/ES15'>ES15</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<ES6 />} />
          <Route path='/ES7' element={<ES7 />} />
          <Route path='/ES8' element={<ES8 />} />
          <Route path='/ES9' element={<ES9 />} />
          <Route path='/ES10' element={<ES10 />} />
          <Route path='/ES11' element={<ES11 />} />
          <Route path='/ES12' element={<ES12 />} />
          <Route path='/ES13' element={<ES13 />} />
          <Route path='/ES14' element={<ES14 />} />
          <Route path='/ES15' element={<ES15 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
