import  mongooose  from "mongoose";

const UserSchema = new mongooose.Schema({
    username:{type:String},
    password:{type:String},
    user_id:{type:String, unique:true}
})

export const UserModel = mongooose.model('myuser', UserSchema);