import { Router } from 'express';
import { UserAuth } from '../controller/controller';
import { PatientController } from '../controller/patient.controller'


export const router = Router();


router.get('/', (req, res) => {
    res.send("kaka")
})

router.post('/register', UserAuth.register);

router.post('/login', UserAuth.login);

router.get('/logout', UserAuth.logout);
// get all doctors
router.get('/users', UserAuth.getAllUsers);
// store selected doctor user
router.post('/patient/add/:did', PatientController.storeUserForLoginPerson);
// get selectod doctor Patients @params did is doctor ID
router.post('/doctor/:did', PatientController.getSelectedDoctorUsers);
// delete selected doctor Patients data @params did is doctor ID and pid is patient id
router.delete('/patient/delete/:did/:pid', PatientController.deleteSelectedDoctorUser);

router.get('/dashboard', UserAuth.checkLoggedIn);