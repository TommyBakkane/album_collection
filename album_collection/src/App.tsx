import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AddPage } from './pages/AddPage';
import { UpdatePage } from './pages/UpdatePage';
import { Album } from './components/Album/Album';
import AlbumProvider from './context/AlbumContext';
import { Navbar } from './components/Navigation/Navbar';


function App() {
  return (
     <div className='page-wrapper'>
      <AlbumProvider>
        <Router>
            <Routes>
              <Route path="Home" element={ <HomePage/> }></Route>
              <Route path="Add" element={ <AddPage/> }></Route>
              <Route path="Update" element={<UpdatePage/>}></Route>
              <Route path="Album" element={ <Album/> }></Route>
            </Routes>
        </Router>
      </AlbumProvider>
   </div>
  );
}

export default App;
