const createIteratorObject = (report) => {
  let employees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees = employees.concat(report.allEmployees[department]);
    }
  }
  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { value, done: false };
      }
      return { done: true };
    },
  };
};

export default createIteratorObject;
