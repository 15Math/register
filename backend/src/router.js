import express from "express";
import registerControl from "./controllers/registerController.js"
import middlewares from "./middlewares/registerMiddlewares.js"

const router = express.Router();

router.post('/sendAut',middlewares.emailExists,registerControl.sendAut);


// router.get('/autVerif', registerControl.funcaoTeste);
// router.get('/checkPass', registerControl.funcaoTeste);


export default router;