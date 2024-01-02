export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const index = array.indexOf(value);
    array[index] = appendString + value;
  }

  return array;
}
