import React from "react";
import "./FormEmail.css"
import { useNavigate } from "react-router-dom";

export default function FormEmail(){
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate("/emailAuntentic");
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>Registre-se para continuar</p>
                <div className="inputField">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required/>
                </div>
                <input type="submit" value="Continuar" className="submitBtn"/>

            </form>
        </div>
    )
}