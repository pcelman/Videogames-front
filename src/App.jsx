import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Create from "./components/Create"
import Detail from "./components/Detail"
import NotFound from "./components/NotFound"
import axios from "axios"
axios.defaults.baseURL = "https://videogames-back-production-4a4a.up.railway.app/"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
