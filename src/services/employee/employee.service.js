exports.allemployees = async () => {
    const employees = [
        {name: "Lakshmi", village: "Hyderabad"},
        {name: "Kiran", village: "Nagapur"}
    ]
    return employees;
}

exports.employee = async () => {
    const employees = {name: "Lakshmi", village: "Hyderabad"}
    
    return employees;
}