import { UserModel, PatientSchema } from '../model/model';
import mongooose from "mongoose";

export class PatientController {

    constructor() { }
    static storeUserForLoginPerson(req, res) {
        let { did } = req.params;
        const { firstname, lastname, patientdis, patientmed, cost, Date } = req.body;
        let DoctorCollection = mongooose.model(did, PatientSchema); // creates a new model for login doctor

        let newPatientData = {
            firstname,
            lastname,
            patientdis,
            patientmed,
            cost,
            Date
        }

        const newPatient = new DoctorCollection(newPatientData)

        newPatient.save((err, record) => {
            if (err) {
                res.send({ status: false })
            }
            else {
                res.send({ status: true, data: record })
            }
        })
    }

    static getSelectedDoctorUsers(req, res) {
        let model = req.params.did;
        let DoctorCollection = mongooose.model(model, PatientSchema);
        DoctorCollection.find({}, (err, users) => {
            res.send({ status: true, data: users })
        })
    }

    static deleteSelectedDoctorUser(req, res) {
        // let { did, pid } = req.params;
        // let model = did;
        // let patientModel = mongoogse.model(model, PatientSchema);
    }


}