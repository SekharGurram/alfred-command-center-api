import { Schema, model } from 'mongoose'

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        lat: { type: Number },
        lng: { type: Number },
    },
    weather: {
        temp:{ type: Number },
        wind:{ type: Number },
        condition:{ type:String},
    },
    progress: { type: Number, default: 0 },
    capacity: { type: String }, // e.g., "150 MW"
    capacityChange: { type: String }, // e.g., "+15%"
    spi: { type: Number, default: 1.0 },
},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const ProjectModel = model('project', projectSchema, 'projects')
