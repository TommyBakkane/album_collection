import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddPage } from './pages/AddPage';
import { UpdatePage } from './pages/UpdatePage';
import { Album } from './components/album/Album';
import AlbumProvider from './context/AlbumContext';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from "./pages/MainPage";
import './App.css'


function App() {
  return (
    <MainPage />
  );
}

export default App;
