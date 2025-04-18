const userModel = require("../models/userModel");

module.exports = class user {
    
    async getAlluser(req, res) {
        try {
            const user = new userModel();
            const response = await user.getAlluser();
            // console.log(response);
            
            res.send(response);
        } catch (err) {
            console.log(err);
        }
    }
    async getUser(req, res) {
        try {
            const user = new userModel();
            const user_id = req.params.user_id;
            const response = await user.getUsers(user_id);
            return res.send(response);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async createUser(req, res) {
        try {
           // console.log(req);
            
            const user = new userModel();
            user.createUser(req.body);

            return res.send("create user success");
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async updateUser(req, res) {
        try {
            const user = new userModel(req.body);
            user.updateUser(req.body);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async deleteUser(req, res) {
        try {
            const user = new userModel();
            const user_id = req.params.user_id;
            user.deleteUser(user_id);
            return res.send("delete user success");
        } catch (err) {
            console.log(err);
            throw err;
        }
    }   
    async create(req, res) {
        try {
            const user = new userModel();
            const response = await user.create();
            res.send(response);
        } catch (err) {
            console.log(err);
        }
    }
};
