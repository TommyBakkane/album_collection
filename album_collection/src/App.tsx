import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './App.css'
import { AlbumDetail } from "./components/AlbumDetail/AlbumDetail";


function App() {
  return (
    
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/album" element={<AlbumDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
