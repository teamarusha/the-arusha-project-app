import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function ReduxCookie() {

    const dropdowns = useSelector(store => store.dropdowns);
    const dispatch = useDispatch();



    let [localDropdownMirror, setLocalDropdownMirror] = useState(JSON.parse(localStorage.getItem('dropdowns')));

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('dropdowns')) === null ){
            dispatch({ type: 'GET_DROPDOWNS' })
        } else {
            dispatch({type: 'SET_DROPDOWNS', payload: localDropdownMirror})
        }
    }, []);

    useEffect(() => {
        if (dropdowns.go === true) {
            localStorage.setItem('dropdowns', JSON.stringify(dropdowns));
        }
    }, [dropdowns.go]);

    return (
        <>
            {dropdowns.go &&
                <>
                    <p>Local Cookie Mirror: {JSON.stringify(dropdowns['cardiac_arrest'])}</p>
                    <p>Local Storage dropdowns: {localStorage.getItem('dropdowns')}</p>
                    <p>Dropdown Reducer: {JSON.stringify(dropdowns)}</p>
                </>
            }



        </>
    )
}

export default ReduxCookie;


// {dropdowns.go &&

//     <select
//         name="SAMPLE"
//         // Change bloodType to the variable you are capturing!!!
//         value={localCookie[`SAMPLE`]}
//         onChange={(e) => submitCookie({ key: `SAMPLE`, thing: e.target.value })}
//     >
//         {/* Edit options as needed! 
//                 Will be using a map function for these
//                 The value attribute is what is
//                 taken in by the submit function */}
//         {/* From database, the structure will be:
//                 <option value="(id from database table)">(Second Column value from database table)</option> */}
//         <option value={0}>--- DEFAULT SELECTION --- </option>

//         {dropdowns.go && dropdowns["gender"].map(selection =>
//             <option value={selection.id}>{selection.type}</option>
//         )}

//     </select>
// }