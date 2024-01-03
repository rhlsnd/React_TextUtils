
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';
import MainHeader from './MainHeader';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextArea from './TextArea';


function App(props) {
  return (
    <BrowserRouter>  
    <Routes>
          <Route path="/" element={<MainHeader/>} >
          <Route index element={<Home title="Home Page"/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/textarea" element={<TextArea/>} />
          <Route path="*" element={<Error/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
