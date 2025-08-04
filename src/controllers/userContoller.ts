import { Request, Response, NextFunction } from 'express'
import { UserDataServiceProvider } from '../services/database/userDataServiceProvider';

const userDataServiceProvider = new UserDataServiceProvider()

export class UserController {
    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await userDataServiceProvider.createUserProfile(req.body);
            return res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    }
}
