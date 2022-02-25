import React from 'react';
import {useContext} from "react";
import {Mycontext} from "./MovieContext.js";

const Nav=()=>{
const value=useContext(Mycontext);
const len=value.length;
    return (
      <div>
        <h4> im Nav component {len}</h4>
      </div>
    );
}


export default Nav;