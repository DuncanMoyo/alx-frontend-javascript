const createIteratorObject = (report) => {
  let employees = [];
  for (let department in report.allEmployees) {
    employees = employees.concat(report.allEmployees[department]);
  }
  let index = 0;
  return {
    next: function () {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
};

export default createIteratorObject;
