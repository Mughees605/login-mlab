import { UserModel } from '../model/model'

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

    static login(req,res){
        let userName = req.body.username;
        let userPassword = req.body.password;

        UserModel.findOne({username:userName,password:userPassword},(err,user)=>{
            if(err){
                throw err;
               return res.status(500).send();
            }

            if(!user){
                return res.status(404).send();
            }

            return res.status(200).send({status:true,data:user})
        })
    }

    static getAllUsers(req,res){
        UserModel.find({},(err,users)=>{
            if(err) throw err;
            res.send({status:true,data:users})
        })
    }

    
}