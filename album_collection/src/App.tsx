import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { AddPage } from './pages/AddPage';
import { AlbumPage } from './pages/AlbumPage';
import { UpdatePage } from './pages/UpdatePage';
import AlbumProvider from './context/AlbumContext';


function App() {
  return (
    <>
    <AlbumProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="Home" element={ <HomePage/> }></Route>
            <Route path="Add" element={ <AddPage/> }></Route>
            <Route path="Album" element={<AlbumPage/>}></Route>
            <Route path="Update" element={<UpdatePage/>}></Route>
          </Routes>
      </Router>
    </AlbumProvider>
    </>
  );
}

export default App;
