const createReportObject = (employeesList) => ({
  allEmployees: { ...employeesList },
  getNumberOfDepartments() {
    return Object.keys(this.allEmployees).length;
  },
});

export default createReportObject;
