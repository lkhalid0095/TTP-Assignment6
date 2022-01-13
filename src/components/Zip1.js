import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loader from './Loader'

export default function Zip() {
    const[zipData, setZipData] = React.useState("")
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
                const sendGetRequest = async () => {
                    const results = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${userInput}`)
                    console.log("axios")
                    console.log(results.data);
                    console.log("axios")
                    setZipData(results.data)
                }

                sendGetRequest();
                

                // try{
                //     fetch(`http://ctp-zip-api.herokuapp.com/zip/${userInput}`)
                                          
                    
                //    .then((res) => res.json())    
                    
                //     // .then((res) => {
                //     //     if(res.ok){
                //     //         console.log('success')
                //     //         res.json()
                //     //     //    console.log(res.json())
                //     //      } else {
                //     //         console.log('notsuccessful')
                //     //       //  setIsError(true)
                //     //     }                    
                //     // }) 

                //     .then(data => setZipData(data.map((elm) =>
                //             <
                //             Card 
                //             key = { elm.RecordNumber }
                //             type = { elm }
                //             />))
                //     )

                    

                // }catch(err){
                //     setIsError(true)
                //     console.log("Problem")
                //     setTimeout(() => setIsError(false),4000)
                // }


                // setIsLoading(false)


    }, [count]);

    const renderZip = () => {
        if(isLoading){
            return <Loader />
        }
        return zipData.map(el => {
            return (
                <Card 
                    key = {el.i.RecordNumber}
                    type = {el}
                />
            )
        })
       
    }


    const loaderIcon = () =>{
        if(isLoading){
            return < Loader />
        }
    }

    const renderError = () => {
       // console.log("renderError "+isError)
        if(isError){
            return (
                <div  className="alert.alert-danger-alert-dismissible.fade show"
                role="alert">
                    Invalid zipcode, please renter your value
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
                    {/* {renderZip()} */}
                    { zipData } 
                    </div>        
                     </div>
                     </div>         
                )

     }
