import express from "express";
import registerControl from "./controllers/registerController.js"

const router = express.Router();

router.get('/sendAut', registerControl.funcaoTeste);
router.get('/autVerif', registerControl.funcaoTeste);
router.get('/checkPass', registerControl.funcaoTeste);


export default router;