const departmentModel = require('../models/departmentModel');

module.exports = class department {
    constructor() {
        this.department = [];
    }
    
    async getfirstDepartment(req, res) {
        try{      
        const department = new departmentModel();
        const response = await department.getfirstdepartment()
        return response;
        }catch(err){
            console.log(err);
        }
    }
    
}