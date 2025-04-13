const pool = require("../config/db_connect");

module.exports = class departmentModel {
  constructor() {
    this.departments = [];
  }

  async getfirstdepartment() {
    try {
        
        const response = await pool.query("SELECT * FROM wrs_departments");
        console.log(response[0][0]);
        this.departments = response[0][0];
        return this.departments;
    } catch (error) {
      console.log(error);
    }
  }
};
