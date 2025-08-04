import app from './app';
import { connectDB } from './config/db';
import { CommunicationServiceProvider } from './services/database/communicationServiceProvider';
import { ProjectDataServiceProvider } from './services/database/projectDataServiceProvider';
import { ProjectTaskServiceProvider } from './services/database/projectTaskServiceProvider';
import { ActionServiceProvider } from './services/database/actionServiceProvider';

const PORT = process.env.PORT || 5000;

const communicationServiceProvider = new CommunicationServiceProvider();
const projectDataServiceProvider = new ProjectDataServiceProvider();
const projectTaskServiceProvider = new ProjectTaskServiceProvider();
const actionServiceProvider = new ActionServiceProvider();

connectDB().then(async () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    // await connectServer();
});

async function connectServer() {
    try {
        // const actionSeed = {
        //     projectId: "688cfc5f660801a144861b9d",
        //     type: "Critical Risk Register",
        //     title: "Logistics Delay Risk",
        //     description: "Potential schedule conflict detected in equipment delivery time line",
        //     priority: "High",
        //     dueDate: new Date("2025-08-05"),
        //     status: "New"
        // };

        const projectTaskSeed = {
            projectId: "688cfc5f660801a144861b9d", // Replace with an actual ObjectId of the project
            stage: "Testing & Commissioning",
            name: "Final Acceptance",
            status: "Pending",
            completion: 0,
            note: "Awaiting grid sync",
            dueDate: new Date("2025-10-15"),
        }


        // const task = await actionServiceProvider.createAction(actionSeed);
        const task = await projectTaskServiceProvider.createTask(projectTaskSeed);
        console.log("task:", task);
    } catch (err) {
        console.log("what is err:", err);
    }
}
