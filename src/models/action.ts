import { Schema, model } from 'mongoose'

const actionSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['High', 'Medium', 'Low', 'Monitoring'], default: 'Medium' },
    dueDate: { type: Date },
    status: { type: String, enum: ['New', 'In Progress', 'Resolved'], default: 'New' },
},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const ActionModel = model('Action', actionSchema, 'actions')
