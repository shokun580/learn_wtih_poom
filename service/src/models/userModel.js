const pool = require("../config/db_connect");

module.exports = class userModel {
  constructor() {
    this.user = [];
  }

  async getAlluser() {
    try {
        const response = await pool.query("SELECT * FROM users");
        console.log(response[0]);
        this.user = response[0];
        return this.user;
    } catch (error) {
      console.log(error);
    } 
  }

  async getUsers(user_id) {
    try {
      const response = await pool.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
      this.user = response[0][0];
      return this.user;
    } catch (error) {
      console.log(error);
    }
  }
};
