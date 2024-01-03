const iterateThroughObject = (reportWithIterator) => {
  let result = '';
  let nextEmployee = reportWithIterator.next();
  while (!nextEmployee.done) {
    result += nextEmployee.value;
    nextEmployee = reportWithIterator.next();
    if (!nextEmployee.done) {
      result += ' | ';
    }
  }
  return result;
};

export default iterateThroughObject;
