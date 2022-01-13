import React from "react"
import Zip2 from "./components/Zip2";
import Navbar from "./components/NavBar";
import Zip from "./components/Zip1"


/**
 * Challenge: Build the Header component
 */
export default function App() {
   return(
    <div> 
      <Navbar />
      <Zip2 /> 
      {/* <Zip1 />   */}
    </div>
   )
}
