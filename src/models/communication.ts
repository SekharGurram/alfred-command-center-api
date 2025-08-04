import { Schema, model } from 'mongoose'

const communicationSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    title: { type: String, required: true },         // e.g., "Status Update"
    message: { type: String, required: true },       // full content
    status: { type: String, enum: ['Normal', 'High', 'Critical'], default: 'Normal' },
    type: { type: String, enum: ['Insight', 'Update', 'FlagRisk'], default: 'Update' },
    note:{ type: String},
    generatedByAI: { type: Boolean, default: false }
},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const CommunicationModel = model('Communication', communicationSchema, 'communications')
