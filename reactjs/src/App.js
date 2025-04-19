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
import ResumePage from './components/resumeRoom';
import CarPage from './components/carPage';

function App() {
  const dispatch = useDispatch();
  dispatch(setUpdateStateInfo());

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000) {
        dispatch(updateUserLogin(decoded));
      } else {
        localStorage.clear();
      }
    }
  })

  return (
    <>
      <Header />
      <Router basename='/photo-management'>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/detail/:stateName" element={<PhotoDetail />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
