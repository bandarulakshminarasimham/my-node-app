const service = require("../../services/employee");

exports.allemployees = async (req, res) => {
    const employees = service.allemployees();
    return res.json(employees);
}