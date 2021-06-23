import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";


function ReduxCookie() {
    const dropdowns = useSelector(store => store.dropdowns);
    const dispatch = useDispatch();


    const [cookie, setCookie, removePatientsCookie] = useCookies(['dropdowns']);
    let [localCookie, setLocalCookie] = useState(JSON.parse(localStorage.getItem('dropdowns')));

    useEffect(() => {
        dispatch({ type: 'GET_DROPDOWNS' })
    }, []);

    useEffect(() => {
        if (dropdowns.go === true) {
            localStorage.setItem('dropdowns', JSON.stringify(dropdowns));
        }
    }, [dropdowns.go]);


    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

        setLocalCookie({ ...localCookie, [newCookie.key]: newCookie.thing });

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }

    return (
        <>
            <p>Local Cookie Mirror: {JSON.stringify(localCookie['cardiac_arrest'])}</p>
            <p>Local Storage dropdowns: {localStorage.getItem('dropdowns')}</p>
            <p>Dropdown Reducer: {JSON.stringify(dropdowns)}</p>



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