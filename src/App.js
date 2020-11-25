import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import TableData from "./components/TableData";
import Title from "./components/Title";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" />
        </Wrapper>
        <Title/>
        <TableData/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
