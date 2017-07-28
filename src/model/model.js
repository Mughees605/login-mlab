import  mongooose  from "mongoose";

const UserSchema = new mongooose.Schema({
    username:{type:String, unique:true},
    password:{type:String},
    user_id:{type:String}
})

export const UserModel = mongooose.model('myuser', UserSchema);