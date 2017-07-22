import  mongooose  from "mongoose";

const UserSchema = new mongooose.Schema({
    username:{type:String, unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}
})

export const UserModel = mongooose.model('myuser', UserSchema);