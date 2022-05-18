import './App.scss';
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
}

export default App;
