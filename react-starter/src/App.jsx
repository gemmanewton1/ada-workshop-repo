import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import logo from "./logo.jpg";
import "./App.css";
import Workshop from "./Views/Workshop";
import BlankPage from "./Views/BlankPage";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />{" "}
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/blankPage">New</Link>
          <Link to="/workshop">Workshop</Link>
          {/* Add another route here... 
               <Link to="/workshop">Customers</Link>
          */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/blankPage" element={<BlankPage />} />
          {/* Add another route here... 
           <Route path="/workshop" element={<Customers />} />
          */}
        </Routes>
      </header>
    </div>
  </Router>
);

export default App;
