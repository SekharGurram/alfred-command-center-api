import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "HOLD"],
        default: "ACTIVE"
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const UserModel = model('User', userSchema, 'users')
