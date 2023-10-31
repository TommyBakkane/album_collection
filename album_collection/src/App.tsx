import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './App.css'
import { Detail } from "./components/Detail";
import "./styles/Album.css"
import "./styles/Header.css"
import { Add } from "./components/functions/Add";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/album" element={<Detail/>} />
          <Route path="/add" element={<Add/>} />
        </Routes>
      </Router>
  );
}

export default App;
