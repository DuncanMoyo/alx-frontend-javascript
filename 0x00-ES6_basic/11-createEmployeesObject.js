const createEmployeesObject = (departmentName, employees) => {
  const obj = {};
  obj[departmentName] = employees;
  return obj;
};

export default createEmployeesObject;
