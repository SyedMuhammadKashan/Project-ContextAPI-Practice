import React,{useContext} from "react";
import {Mycontext} from "./MovieContext";

const MovieList = () => {
const [movies,setmovies]=useContext(Mycontext);
  return (
    <div>
    {movies.map((cuele)=>{
          
      return(
        <>
        <h2>{cuele.name} & {cuele.age}</h2>
        <p>{cuele.uni}</p>
        </>
      )
    })
    
    
    
    
    
    
    
    
    
    
    }
    </div>
  );
};
export default MovieList;
