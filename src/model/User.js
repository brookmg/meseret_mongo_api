import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const UserSchema = new Schema({
    _id: { type: String, default: uuidv4 , alias: 'uid' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    level: { 
        type: String, 
        enum: ['USER' , 'READER' , 'ADMIN' , 'GOD'], 
        required: true 
    }
}, { collection: 'Users' });

export const User = model('User' , UserSchema);
