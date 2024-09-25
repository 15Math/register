import React from "react";
import { useNavigate } from "react-router-dom";
import "./FormEmailAutentic.css"

export default function FormEmailAutentic(){
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate("/success");
    }
    const handleInputChange = (event) => {
        // Permitir apenas números no input
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>Para concluir a configuração da conta, insira o código que foi enviado para:</p>
                <div className="inputField">
                    <label htmlFor="email">Emailtestw@gmail.com</label>
                    <div className="inputsAut">
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                        <input type="text" className="autChar" maxLength={1} onInput={handleInputChange}/>
                    </div>
                </div>
                <input type="submit" value="Continuar" className="submitBtn"/>

            </form>
        </div>
    )
}