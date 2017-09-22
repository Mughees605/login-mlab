import mongooose from "mongoose";

const UserSchema = new mongooose.Schema({
    username: { type: String },
    password: { type: String },
    user_id: { type: String, unique: true }
})

export const PatientSchema = new mongooose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    patientdis: { type: String },
    patientmed: { type: String },
    cost: { type: Number },
    Date: { type: String, default: new Date().getTime() },
    gender: { type: String }
})

export const UserModel = mongooose.model('myuser', UserSchema);