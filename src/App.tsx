import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
