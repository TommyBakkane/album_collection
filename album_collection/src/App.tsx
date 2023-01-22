import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/nav/Navbar';
import { AlbumPage } from './pages/AlbumPage';
import { AddPage } from './pages/AddPage';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="Home" element={ <AlbumPage/> }></Route>
          <Route path="Add" element={ <AddPage/> }></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
