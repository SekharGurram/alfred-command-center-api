import { Schema, model } from 'mongoose'

const logSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    action: { type: String, required: true },
    triggeredBy: { type: String },
    timestamp: { type: Date, default: Date.now },

},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const LogModel = model('Log', logSchema, 'logs')
