import './App.css';
import Header from './header/generalHeader';
import MainBody from './body';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoDetail from './components/photoShowRoom';

function App() {
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
