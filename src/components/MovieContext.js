  import React,{useState,createContext} from 'react';

export const Mycontext = createContext();


export const Mycontextfun=(props)=>{
const[movies,setmovies]=useState([
{
  name:"kashan",
  age:17,
  uni:"ssuet"
},

{
  name:"salman",
  age:18,
  uni:"BU"
},
{
  name:"Mool",
  age:19,
  uni:"ssuet"
}






]);

return(
  <Mycontext.Provider value={[movies,setmovies]}>
    {props.children}
  
</Mycontext.Provider>
)





}
