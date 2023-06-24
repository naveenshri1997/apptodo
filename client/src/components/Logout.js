import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {
        const url ="https://server-dccr.onrender.com";
    const { state, dispatch } = useContext(UserContext);
    const history = useNavigate();
    useEffect(() => {
        fetch(url+'/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
                "Access-Control-Allow-Origin": "access-control-allow-origin"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:'USER',payload:false})
            history('/login');
            if (res.status != 200) {
                const err = new Error(res.error);
                throw err;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
            <h1>Logout</h1>
        </>
    )
}

export default Logout
