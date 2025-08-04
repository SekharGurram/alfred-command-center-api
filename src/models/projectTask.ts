import { Schema, model } from 'mongoose';

const ProjectTaskSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'project',
        required: true
    },
    stage: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    completion: { type: Number, default: 0 },
    note: { type: String },
    dueDate: { type: Date },
},
    {
        timestamps: {
            'createdAt': 'created_at',
            'updatedAt': 'updated_at'
        }
    });

export const ProjectTaskModel = model('projectTask', ProjectTaskSchema, 'project_tasks')
