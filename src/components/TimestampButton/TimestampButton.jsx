import React from 'react';
import { useState } from 'react';

// ----- Material UI -----
import Button from '@material-ui/core/Button';

function TimestampButton() {

    const [buttonText, setButtonText] = useState('Dispatched');

    function clickMe() {
        console.log('Button clicked...');
        
        // handleClick = () => {
          
          switch (buttonText) {
            case "Dispatched":
              setButtonText("Unit En Route");
              break;
            case "Unit En Route":
              setButtonText("Arrived at Scene");
              break;
            case "Arrived at Scene":
              setButtonText("Arrived at Patient");
              break;
            case "Arrived at Patient":
              setButtonText("En Route to Hospital");
              break;
            case "En Route to Hospital":
              setButtonText("Arrived at Hospital");
              break;
            default:
              setButtonText("Dispatched");
              break;
          }
    
          const timestamp = Date.now(); // This would be the timestamp you want to format
          console.log(
            new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
        }).format(timestamp)
      );
    
        }

    return (
        <div>
            <div>
              <Button onClick={clickMe} color="primary"
              variant="contained"
              // onClick={() => handleClick()}
              >{buttonText}</Button>
            </div>
        </div>
    )
}

export default TimestampButton;