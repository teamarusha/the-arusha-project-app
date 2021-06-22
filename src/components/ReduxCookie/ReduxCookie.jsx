import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function ReduxCookie() {
    const cookieMirror = useSelector(store => store.cookieMirror);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({ type: 'GET_DROPDOWNS' })
    }, [])

    return (
        <>
            <p>
                {JSON.stringify(cookieMirror)}
            </p>
        </>
    )
}

export default ReduxCookie;