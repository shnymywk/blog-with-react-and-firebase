// react-router-domからRouter, Routes, Route, Link機能をimport
// 他componentからのimport
// useStateのimport

import './App.css';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  // isAuthという認証に関する状態変数
  // localStorageの値を取得してisAuthとしている
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      {/* NavbarにisAuthというオブジェクトをisAuthという名で渡している */}
      <Navbar isAuth={isAuth} />
      <Routes> 
        {/* pathは実際のURLの/以降 elementはそのURLで表示されるコンポーネント*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} /> }></Route>
        {/* propsとしてsetIsAuthを小要素に渡す */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
