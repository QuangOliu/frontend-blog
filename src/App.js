import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import TextEditorPage from "./page/TextEditorPage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/text-editor' element={<TextEditorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
