import React from "react";
import { useNavigate } from "react-router-dom";

export default function FormEmail(){

    const navigate = useNavigate();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{ 

            const userEmail = event.target.email.value;
            const response = await fetch('http://localhost:3000/sendAut',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                 },
                body:JSON.stringify({userEmail})
            })

            if(!response.ok){
                console.error('Erro ao enviar o email');
                return;
            }

            navigate("/emailAuntentic", {state:{userEmail}});
        }catch(error){
            console.error('Erro:', error);
        }
        
        
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