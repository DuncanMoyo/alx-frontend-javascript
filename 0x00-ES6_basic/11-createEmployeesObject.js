const createEmployeesObject = (departmentName, employees) => {
  let obj = {};
  obj[departmentName] = employees;
  return obj;
};

export default createEmployeesObject;
