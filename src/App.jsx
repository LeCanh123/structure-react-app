import './App.scss';
import Loading from '@components/Loadings/Loading.jsx';
import { Routes,Route } from 'react-router-dom';
import Lazyload from "./LazyLoad"
import Navbar from '@pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='app_container'>
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={Lazyload(()=>import('@pages/Homes/Home'))()}></Route>
        <Route path='/about' element={Lazyload(()=>import('@pages/abouts/About'))()}>
          <Route path='myinfo' element={Lazyload(()=>import('@pages/abouts/myabout/MyInfo'))()}></Route>
        </Route>
      </Routes>
      </div>

    </div>
  );
}

export default App;
