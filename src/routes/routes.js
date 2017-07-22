import { Router } from 'express';
import { UserAuth } from '../controller/controller'

export const router = Router();


router.get('/',(req,res)=>{
    res.send("kaka")
})

router.post('/register', UserAuth.register)

router.get('/users',UserAuth.getAllUsers)