interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee: (salary: number | string) => Director | Teacher = (
  salary
) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

// Test the function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

// Test the functions
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

const teachClass: (todayClass: Subjects) => string = (todayClass) => {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    if (todayClass === "History") {
      return "Teaching History";
    }
  }
};

// Test the function
console.log(teachClass('Math'));
console.log(teachClass('History'));