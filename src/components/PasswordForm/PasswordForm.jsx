import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PasswordForm(){
    const navigate = useNavigate();
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{ 
            const password = event.target.password.value;
            const passwordConfirm = event.target.passwordConfirm.value;
            const response = await fetch('http://localhost:3000/sendAut',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                 },
                body:JSON.stringify({password, passwordConfirm})
            })

            const result = await response.json();

            if(!response.ok){
                console.error('Erro ao enviar email');
                setWarningMessage(result.message);
                setShowWarning(true);
                return;
            }
            
            navigate("/");
        }catch(error){
            console.error('Erro:', error);
            setWarningMessage('An unexpected error occurred.');
            setShowWarning(true);
        }
        
        
    }
    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <p>Está quase acabando!</p>
            <p className="comment">Crie uma senha forte para garantir a segurança de sua conta!</p>
            <div className="inputField">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" required/>
            </div>
            <div className="inputField">
                <label htmlFor="password">Confirmação da senha:</label>
                <input type="password" name="passwordConfirm" required/>
            </div>
            <input type="submit" value="Continuar" className="submitBtn"/>
            {showWarning && <p className="warning">{warningMessage}</p>}
        </form>
        </div>
    )
}