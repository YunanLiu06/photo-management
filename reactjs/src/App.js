import './App.css';
import Header from './header/generalHeader';
import MainBody from './body';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoDetail from './components/photoShowRoom';
import { useDispatch } from 'react-redux';
import { setUpdateStateInfo } from './redux/action/stateInfo';
import { useEffect } from 'react';
import { updateUserLogin } from './redux/action/loginUser';
import { jwtDecode } from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  dispatch(setUpdateStateInfo());

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp>Date.now()/1000) {
        dispatch(updateUserLogin(decoded));
      }
    }
  })

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/photo-management" element={<MainBody />} />
          <Route path="/photo-management/detail/:stateName" element={<PhotoDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
