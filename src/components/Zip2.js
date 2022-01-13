import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loader from './Loader'

export default function Zip() {
    const [zipData, setZipData] = React.useState("")
    const [userInput, setUserInput] = React.useState('')
    // for dependancy value count : maybe can be changed after handleChange 
    const [count, setCount] = React.useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    React.useEffect(function() {
                console.log("Effect ran")
                console.log(count)
                console.log("userInput:" + userInput)
                setIsLoading(true)
                setIsError(false)

                //setZipData updates state of zipData object
                // Card is the child 
                try{
                    fetch(`http://ctp-zip-api.herokuapp.com/zip/${userInput}`)
               
                    //   .then(res => res.json())

                    .then((res) => {
                        if(res.ok){
                            console.log('success')
                           return res.json()
                            
                         } else {
                            console.log('not successful')
                            setIsError(true)
                        }                    
                    }) 

                    .then(data => setZipData(data.map((elm) =>
                            <Card 
                            key = { elm.RecordNumber }
                            type = { elm }
                            />))
                    )
                }catch(err){
                    setIsError(true)
                    console.log("Problem")
                    setTimeout(() => setIsError(false),4000)
                }


                setIsLoading(false)


    }, [count]);

    const loaderIcon = () =>{
        if(isLoading){
            return < Loader />
        }
    }

    const renderError = () => {
        console.log("renderError "+isError)
        if(isError){
            return (
                <div  className="alert.alert-danger-alert-dismissible.fade show"
                role="alert">
                    Invalid zipcode, please try again
                </div>
            )
        }
    }

    return (

                    <div class = "body" >
                    <div class = "zipbar">
                        
                    <label>Enter Zip Code:</label>
                    <input type = "text"
                    placeholder = "Zip Code..."
                    onChange = { e => setUserInput(e.target.value) }
                    name = "userInput"
                    value = { userInput }
                    />  
         
                    <button onClick = {
                        () => setCount(prevCount => prevCount + 1) }
                    id = 'submit-button' > Submit </button>

                    <div id = "print-area" >
                    <p id = 'list' > Result: </p> 
                    {loaderIcon()} 
                    {renderError()}   
                    { zipData } 
                    </div>        
                     </div>
                     </div>         
                )

     }
