const authModel = require("../models/authModel");
import { Request, Response } from 'express';
import * as crypto from 'crypto';
import * as argon2 from 'argon2';
import { config } from 'dotenv';

module.exports = {
    async getAllUsers(req: Request, res: Response) {
        const allUsers = await authModel.getAllUsers();
        res.send(allUsers);
    },

    async getUserById(req: Request, res: Response){
        const user: Object = await authModel.getUserById();
        res.send(user);
    },

    async createUser(req: Request, res: Response){
        let { id, username, password } = req.body;
        //let currentSalt;

        const hashConfig = {
            parallelism: 2,
            memoryCost: 64000,
            timeCost: 3,
        }

        // const generateSalt = () => {
        //     const salt = crypto.randomBytes(32).toString('base64');
        //     console.log(salt);
        //     currentSalt = salt;
        //     return salt;
        // }

        const hashPassword = async (password, /*salt*/) => {
            return await argon2.hash(password, {
                ...hashConfig,
                //salt,
            });
            
        };
        //const salt = generateSalt()
        const hashedPassword = await hashPassword(password, /*salt*/);

        const userObj = {
            id: id,
            username: username,
            password: hashedPassword,
           // salt: currentSalt,
        };

        if (id) {
            await authModel.updateUser(userObj);
        } else {
            await authModel.createUser(userObj);

        }
        //currentSalt = '';
        res.status(200).send(userObj);
    },


}