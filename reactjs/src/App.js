import './App.css';
import Header from './header/generalHeader';
import MainBody from './body';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoDetail from './components/photoShowRoom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { S3AccessTool } from './tools/s3AccessTool';
import { setUpdateStateInfo } from './redux/action/stateInfo';

function App() {
  const statesInfo = new Map();
  const [res, setRes] = useState({});

  const dispatch = useDispatch();

  useEffect(() => { //get the information of all the images in s3 everytime reload.
    S3AccessTool({ operation: 'getAll' }, setRes); 
  },[]);

  if (res.data?.body) { //create map for each state and corresponding image name list
    res.data.body.forEach(value => {
      const currKey = value?.Key;
      const subKey = currKey.substring(0,2);
      if(!statesInfo.has(subKey)) {
        statesInfo.set(subKey, []);
      }
      statesInfo.get(subKey).push(currKey);
    })
  }
  
  useEffect(() => {
    if (statesInfo.size !== 0) {
      dispatch(setUpdateStateInfo(Object.fromEntries(statesInfo)));
    }
  },[statesInfo, dispatch])
  
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
