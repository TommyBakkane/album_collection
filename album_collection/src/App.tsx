import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/nav/Navbar';
import { HomePage } from './pages/HomePage';
import { AddPage } from './pages/AddPage';
import { AlbumPage } from './pages/AlbumPage';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="Home" element={ <HomePage/> }></Route>
          <Route path="Add" element={ <AddPage/> }></Route>
          <Route path="Album" element={ <AlbumPage/> }></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
