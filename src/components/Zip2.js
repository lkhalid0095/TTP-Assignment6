import React from 'react'
import Card from './Card'

export default function Zip() {
    const [zipData, setZipData] = React.useState("")
    const [userInput, setUserInput] = React.useState('')

    // for dependancy value count : maybe can be changed after handleChange 
    const [count, setCount] = React.useState(0);


    React.useEffect(function() {
                console.log("Effect ran")
                console.log(count)
                console.log("userInput:" + userInput)

                //setZipData updates state of zipData object
                // Card is the child 
                fetch(`http://ctp-zip-api.herokuapp.com/zip/${userInput}`)
                    .then(res => res.json())
                    .then(data => setZipData(data.map((elm) =>
                            <
                            Card key = { elm.RecordNumber }
                            type = { elm }
                            />))
                        )
                    }, [count]);

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
                    id = 'submit-button' > Submit < /button>

                    <div id = "print-area" >
                    {/*<p id = 'list' > Result: < /p>    */}
                  { zipData } 
                    </div>        
                     </div>
                     </div>         
                )

            }