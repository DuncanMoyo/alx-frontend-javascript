interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  age: 21,
  firstName: "Steve",
  lastName: "Jobs",
  location: "Zimbabwe",
};

const student2: Student = {
  age: 32,
  firstName: "Bill",
  lastName: "Gates",
  location: "South Africa",
};

const studentList = [student1, student2];

const body = document.querySelector("body");
const table = document.createElement("table");
body.appendChild(table);
studentList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});
