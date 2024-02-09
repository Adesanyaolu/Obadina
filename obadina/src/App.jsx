import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homepage from '../src/pages/Homepage.jsx';
import About from '../src/pages/About.jsx';




function App() {
  return (
    <>
      {
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route  path="/about" element={<About />}>
            </Route>
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
