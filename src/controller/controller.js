import { UserModel, pSchema } from '../model/model';
import mongooose from "mongoose";


export class UserAuth {

    constructor() { }

    static register(req, res) {
        const newUser = new UserModel(req.body)
        newUser.save((err, record) => {
            if (err) {
                res.send({ status: false })
            }
            else {
                res.send({ status: true, data: record })
            }
        })
    }

    static login(req, res) {
        let user_id = req.body.user_id;
        let userPassword = req.body.password;

        UserModel.findOne({ user_id: user_id, password: userPassword }, (err, user) => {
            if (err) {
                throw err;
                return res.status(500).send({ status: false });
            }

            if (!user) {
                return res.status(404).send({ status: false });
            }
            else {
                req.session.user = user;
                return res.status(200).send({ status: true, data: user })
            }

        })
    }

    static storeUserForLoginPerson(req, res) {
        let { uid } = req.params;
        const { firstname, lastname, patientdis, patientmed, cost, Date} = req.body;
        let patientModel = mongooose.model(uid, pSchema);

        let newPatientData = {
            firstname,
            lastname,
            patientdis,
            patientmed,
            cost,
            Date
        }

        const newPatient = new patientModel(newPatientData)

        newPatient.save((err, record) => {
            if (err) {
                res.send({ status: false })
            }
            else {
                res.send({ status: true, data: record })
            }
        })
    }

    static getAllUsers(req, res) {
        UserModel.find({}, (err, users) => {
            if (err) throw err;
            res.send({ status: true, data: users })
        })
    }

    static checkLoggedIn(req, res) {
        if (!req.session.user) {
            return res.status(401).send()
        }
        else {
            return res.status(200).send("welcome")
        }
    }

    static logout(req,res, next){
      if(req.session){
          console.log(req.session,"re---------------------------------------------------------------")
          req.session.destroy((err)=>{
              if(err){
                  return next(err)
              }
              else{
                  return res.status(200).send('logout')
              }
          })
      }
    }


}
