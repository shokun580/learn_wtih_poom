const userModel = require("../models/userModel");

module.exports = class user {
    constructor() {
        this.department = [];
    }

    async getAlluser(req, res) {
        try {
            const user = new userModel();
            const response = await user.getAlluser();
            return response;
        } catch (err) {
            console.log(err);
        }
    }
    async getUser(user_id) {
        try {
            const user = new userModel();
            const response = await user.getUsers(user_id);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};
