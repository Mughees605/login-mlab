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

    static getAllUsers(req,res){
        UserModel.find({},(err,users)=>{
            if(err) throw err;
            res.send({status:true,data:users})
        })
    }
}