import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormEmail(){

    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{ 

            const userEmail = event.target.userEmail.value;
            const response = await fetch('http://localhost:3333/sendAut',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                 },
                body:JSON.stringify({userEmail})
            })

            const result = await response.json();

            if(!response.ok){
                setShowWarning(true);
                setWarningMessage(result.message);
                return;
            }
            navigate("/emailAuntentic", {state:{userEmail}});
        }catch(error){
            console.error('Erro:', error);
            setShowWarning(true);
            setWarningMessage('Erro!');
            
        }
        
        
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>Registre-se para continuar</p>
                <div className="inputField">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="userEmail" required/>
                </div>
                <input type="submit" value="Continuar" className="submitBtn"/>
                {showWarning && <p className="warning">{warningMessage}</p>}
            </form>
        </div>
    )
}