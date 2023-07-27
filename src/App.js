

import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Selling from "./pages/Selling";

function App() {
  return (
    <div className="w-full overflow-hidden">
       <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/selling" element={<Selling/>}/>
      </Routes>
       
  
      <Footer/>
    </div> 
  
   
  );
}

export default App;
