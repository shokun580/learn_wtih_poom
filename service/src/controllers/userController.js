const userModel = require("../models/userModel");

module.exports = class user {
    
    async getAlluser(req, res) {
        try {
            console.log('เข้า');
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
            const user = new userModel();
            user.createUser(req.body);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async updateUser(req, res) {
        try {
            const user = new userModel();
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
        } catch (err) {
            console.log(err);
            throw err;
        }
    }   
};
