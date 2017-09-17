import { Router } from 'express';
import { UserAuth } from '../controller/controller'

export const router = Router();


router.get('/', (req, res) => {
    res.send("kaka")
})

router.post('/register', UserAuth.register);

router.post('/login', UserAuth.login);

router.post('/patient/:uid', UserAuth.storeUserForLoginPerson);

router.post('/doctor/:model', UserAuth.getSelectedDoctor);

router.get('/users', UserAuth.getAllUsers);

router.get('/dashboard', UserAuth.checkLoggedIn);

router.get('/logout', UserAuth.logout);