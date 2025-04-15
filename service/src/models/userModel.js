const pool = require("../config/db_connect");

module.exports = class userModel {
  constructor() {
    this.user = [];
  }

  async getAlluser() {
    try {
      
      
        const response = await pool.query("SELECT user_id, user_username ,user_fullname, user_role , pvc_name FROM users left join provinces on pvc_id = province ");
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
  async createUser(userModel){
    try{
      const response = await pool.query("INSERT INTO users (user_username, user_name_title, user_fullname, user_password, user_role, province) VALUES (?, ?, ?, ?, ? ,?)", [userModel.user_username, userModel.user_name_title, userModel.user_fullname, userModel.user_password, userModel.user_role , userModel.province]);
      //this.user = response[0][0];
      return response;

    }catch(error){
      console.log(error);
    }
  }
  async updateUser(userModel){
    try{
      const response = await pool.query("UPDATE users SET user_username = ?, user_name_title = ?, user_fullname = ?, user_password = ?, user_role = ?, province = ? WHERE user_id = ?", [userModel.user_username, userModel.user_name_title, userModel.user_fullname, userModel.user_password, userModel.user_role , userModel.province, userModel.user_id]);
      //this.user = response[0][0];
      return response;

    }catch(error){
      console.log(error);
    }
  }
  async deleteUser(user_id){
    try{
      const response = await pool.query("DELETE FROM users WHERE user_id = ?", [user_id]);
      //this.user = response[0][0];
      return response;

    }catch(error){
      console.log(error);
    }
  }


};
