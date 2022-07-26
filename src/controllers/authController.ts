const authModel = require("../models/authModel");
import { Request, Response } from 'express';
//const createSalt = require('../auth/salt');
import * as crypto from 'crypto';

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
        let { id, username, password } = req.body;
        let currentSalt: String;
        const createSalt = () => {
            const salt = crypto.randomBytes(32).toString('base64');
            currentSalt = salt;
            return salt;
        };

        const userObj = {
            id: id,
            username: username,
            password: password += createSalt(),
            salt: currentSalt,
        };

        if (id) {
            await authModel.updateUser(userObj);
        } else {
            await authModel.createUser(userObj);

        }
        res.status(200).send(userObj);
    },


}