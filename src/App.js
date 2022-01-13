import React from "react"
import Home from "./components/Home";
import Zip2 from "./components/Zip2";
import NotFound from "./components/NotFound";
import Navbar from "./components/NavBar";


/**
 * Challenge: Build the Header component
 */
export default function App() {
   return(
    <div> 
      <Navbar />
      <Zip2 />   
    </div>
   )
}
