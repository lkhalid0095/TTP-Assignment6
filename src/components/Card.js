import React from "react"

export default function Card(props){
   
    console.log(props)
    const zip = props.type
  
    return (         
        <div className="card">
        <div className="card-stats">  
        <div className="city-el">
            <span id="city-state">{zip.City}, {zip.State}</span>  
          </div>         
            <ul id="zip-detail">
            <li>State: {zip.State}</li>
                <li>Location: ({zip.Xaxis}, {zip.Yaxis}) </li>
                <li>Population (estimated): {zip.EstimatedPopulation}</li>
                <li>Total Wages: $ {zip.TotalWages}</li>
            </ul>
        </div>
        </div>  
    )
}