import react, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Add from "./pages/Add";
import Delete from "./pages/Delete";
import Layout from "./pages/Layout";

class App extends Component {


  render() {
    return (
      <div className="App" >
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="add" element={<Add />} />
              <Route path="delete" element={<Delete />} />
            </Route>
          </Routes>
        </Router>
      </div >
    )
  }
}


export default App;