const authModel = require("../models/authModel");

import { Request, Response } from 'express';

module.exports = {
    async getAllUsers(req: Request, res: Response) {
        const allUsers = await authModel.getAllUsers();
        res.send(allUsers);
    },

    async getUserById(req: Request, res: Response){
        const user = await authModel.getUserById();
        res.send(user);
    },

    async createUser(req: Request, res: Response){
        const { id, username, password } = req.body;
        const userObj = {
            id: id,
            username: username,
            password: password,
        };

        await authModel.createUser(userObj);

        res.status(200).send(userObj);
    }
}