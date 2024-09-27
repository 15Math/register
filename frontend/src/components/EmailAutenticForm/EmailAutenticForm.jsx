import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EmailAutenticForm.css"
import {useState} from "react";




export default function FormEmailAutentic(){
    
    const [autChars, setAutChars] = useState(new Array(6).fill(''));
    const [showWarning, setShowWarning] = useState(false); 

    const navigate = useNavigate();
    const location = useLocation();

    const userEmail = location.state?.userEmail;

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const inputAut = autChars.join("");
        try{
            const response = await fetch('http://localhost:3333/autVerif',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                 },
                body:JSON.stringify({inputAut})
            })

            if(!response.ok){
                console.error('Erro ao enviar email');
                setShowWarning(true);
            }

            navigate("/passwordForm");
            
        }catch(error){
            console.error('Erro:', error);
            setShowWarning(true);
        }
        
    }
    const handleInputChange = (event, key) => {
        // Permitir apenas números no input
        const newValue = event.target.value.replace(/[^0-9]/g, '');

        const updatedAutChars = [...autChars];
        updatedAutChars[key] = newValue;
        setAutChars(updatedAutChars);
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>Para concluir a configuração da conta, insira o código que foi enviado para:</p>
                <div className="inputField">
                    <p className="userEmail">{userEmail}</p>
                    <div className="inputsAut">
                        {autChars.map((char,index) => (
                            <input key={index} type="text" className="autChar" maxLength={1} onChange={(event)=>handleInputChange(event,index)}/>
                        ))
                        }
                    </div>
                </div>
                <input type="submit" value="Continuar" className="submitBtn"/>
                <button className="sendTokenBtn">Reenviar Token</button>
                {showWarning && <p className="warning">Autentificador inválido</p>}
            </form>
        </div>

    )
}