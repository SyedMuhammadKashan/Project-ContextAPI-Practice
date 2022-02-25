import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import MovieList from "./components/MovieList.js";
import {Mycontextfun} from "./components/MovieContext.js";

 
const App = () => {
  
  return (
    <Mycontextfun>
      <>
        <Nav />
        <MovieList />
      </>
    </Mycontextfun>
  );
};
export default App;
