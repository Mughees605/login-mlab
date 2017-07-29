import mongooose from "mongoose";

const UserSchema = new mongooose.Schema({
    username: { type: String },
    password: { type: String },
    user_id: { type: String, unique: true }
})

export const pSchema = new mongooose.Schema({
    username: { type: String },
    fullname: { type: String },
    address: { type: String },
})

export const UserModel = mongooose.model('myuser', UserSchema);