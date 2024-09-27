import registerModel from '../models/registerModel.js';

import dotenv from 'dotenv'
import { text } from 'express';
import nodemailer from 'nodemailer'

dotenv.config();

const sendAut = async (req, res) => {
    const { userEmail } = req.body;
    console.log(process.env.AUTH_EMAIL,process.env.AUTH_PASS)
    
    const codeGenerator = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const expiration = new Date(Date.now() + 180000).toISOString().slice(0, 19).replace('T', ' ');
    const code = { data: codeGenerator(), email: userEmail, expiration: expiration };
    
    try {
        await registerModel.insertAutCode(code);
        const smtp = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        });

        const configEmail = {
            from: process.env.AUTH_EMAIL,
            to: userEmail,
            subject: `O seu código é: ${code.data}`, 
            html: `
                <h1>O seu código é: <strong>${code.data}</strong></h1>
                <p>Digite esse código no cadastro para confirmar o seu email!</p>
            `,
            text: `O seu código é: ${code.data}`
        };

        await smtp.sendMail(configEmail);
        console.log('Email enviado com sucesso');
        
        res.status(200).json({ message: "Tudo correto!" });
    } catch (err) {
        console.error('Erro: ', err);
        res.status(500).json({ message: "Erro ao processar a requisição." });
    }
};

export default {

    sendAut
}