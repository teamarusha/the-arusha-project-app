const timeStampReducer = (state = 'Dispatched') => {

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

}