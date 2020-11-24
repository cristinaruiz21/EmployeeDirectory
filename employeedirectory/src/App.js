import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import TableData from "./components/TableData";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/employees" component={Employees} /> */}
        </Wrapper>
        <TableData/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
