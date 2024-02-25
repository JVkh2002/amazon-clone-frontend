//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/home/index'
import { YourAccount } from './pages/yourAccount/index'
import { Books } from './pages/books/index'
import { Login } from './pages/login/index'
import { Register } from './pages/register/index'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourAccount" element={<YourAccount />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
