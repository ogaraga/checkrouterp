import Description from "./components/Trailer/Description";
import PageNotFound from "./components/Trailer/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Trailer/Home";
import './App.css';
function App() {
  
  return(
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Description" element = {<Description/>}/>
            <Route path="/*" element = {<PageNotFound/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

