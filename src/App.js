import Locker from './pages/locker';
import Todo from './pages/todo';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    setLogin(e);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={login? <Todo /> : <Locker handleLogin={handleLogin}/>} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
