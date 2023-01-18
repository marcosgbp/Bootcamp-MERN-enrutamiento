import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Numero from './components/Numero';
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/:numero/:colorText/:colorFondo' element={<Numero/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
