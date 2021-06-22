import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";


function ReduxCookie() {
    const dropdowns = useSelector(store => store.dropdowns);
    const dispatch = useDispatch();


    const [cookie, setCookie, removePatientsCookie] = useCookies(['dropdowns']);
    let [localCookie, setLocalCookie] = useState(cookie);

    useEffect(() => {
        dispatch({ type: 'GET_DROPDOWNS' })
    }, [])

    useEffect(() => {
        setCookie("dropdowns", dropdowns, { path: '/' });
    }, [dropdowns.go])


    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

        setLocalCookie({ ...localCookie, [newCookie.key]: newCookie.thing });

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }

    return (
        <>
            <p>Local Cookie Mirror: {JSON.stringify(localCookie)}</p>
            <p>THE Cookie: {JSON.stringify(cookie)}</p>
            <p>Dropdown Reducer: {JSON.stringify(dropdowns)}</p>


            {
                dropdowns.go &&

                <select
                    name="SAMPLE"
                    // Change bloodType to the variable you are capturing!!!
                    value={localCookie[`SAMPLE`]}
                    onChange={(e) => submitCookie({ key: `SAMPLE`, thing: e.target.value })}
                >
                    {/* Edit options as needed! 
                            Will be using a map function for these
                            The value attribute is what is
                            taken in by the submit function */}
                    {/* From database, the structure will be:
                            <option value="(id from database table)">(Second Column value from database table)</option> */}
                    <option value="">--- DEFAULT SELECTION --- </option>

                    {dropdowns["transport_disposition"].map(selection =>
                        <option value={selection.id}>{selection.type}</option>
                    )}
                    
                </select>
            }
        </>
    )
}

export default ReduxCookie;