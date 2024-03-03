# Welcome to  Utility Library for JavaScript!
This npm package provides a versatile utility library for JavaScript developers, encompassing essential functionalities for array manipulation, conditional loops, date formatting, and string manipulation.
# Utility Library for JavaScript
This npm package provides a versatile utility library for JavaScript developers, encompassing essential functionalities for array manipulation, conditional loops, date formatting, and string manipulation.
# Installation
You can install the package via npm:
`npm install utilitylibrary-js` 
# Import
Import in your project:
`import { utilityLibrary } from  "utilitylibrary-js";`
##  Usage
### Array Methods:
Example Array :
const myArray = [1, 2, 3, 4, 5, 3, 2];
1. **isEmpty(arr):** Checks if an array is empty.
Example:
console.log("Is the array empty?", utilityLibrary.array.isEmpty(myArray));
//Is the array empty? false
2. **contains(arr, element):** Checks if an array contains a specific element.
Example
console.log("Does the array contain3?",utilityLibrary.array.contains(myArray, 3));
//Does the array contain 3? true
3. **removeDuplicates(arr):** Removes duplicates from an array.
Example:
console.log("Unique elements in the array:",utilityLibrary.array.removeDuplicates(myArray));
//Unique elements in the array:[1,2,3,4,5]
4. **flatten(arr):** Flattens a nested array.
Example:
console.log("Flattened array:",utilityLibrary.array.flatten([[1, 2],[3, 4],[5, 6],]));
//Flattened array: [ 1, 2, 3, 4, 5, 6 ]
5. **shuffle(arr):** Shuffles the elements of an array.
Example:
console.log("Shuffled array:", utilityLibrary.array.shuffle(myArray));
//Shuffled array: [ 2, 3, 4, 5,3, 2, 1]
6. **sum(arr):** Calculates the sum of all elements in an array.
Example:
console.log("Sum of array elements:", utilityLibrary.array.sum(myArray));
//Sum of array elements: 20
7. **average(arr):** Calculates the average of all elements in an array.
 Example:
 console.log("Average of array elements:",utilityLibrary.array.average(myArray));
 //Average of array elements: 2.857142857142857
 8. **max(arr):** Finds the maximum element in an array.
 Example:
 console.log("Maximum element in the array:", utilityLibrary.array.max(myArray));
 Example:
 //Maximum element in the array: 5
 9. **min(arr):** Finds the minimum element in an array.
 Example:
 console.log("Minimum element in the array:", utilityLibrary.array.min(myArray));
 //Minimum element in the array: 1
 
  10. **filter() method:** takes a callback function as an argument and returns a new array.
  Example:
  const evenNumbers = utilityLibrary.loop.filter(myArray, num => num % 2 === 0); console.log("Even numbers:", evenNumbers);
  //[2,4,2]
  11. **map() method:**  iterates over an array and applies a callback function to each element& returns a new array containing the transformed elements.
  Example:
  const  squaredNumbers  =  utilityLibrary.array.map(myArray,(number) =>  number  *  number);
  console.log(squaredNumbers);
  //[ 1, 4, 9, 16, 25, 9, 4]
  12. **forEach() method:** takes a callback function as an argument and applies it to each element of the array.
  Example:
  utilityLibrary.array.forEach(myArray, (number) =>  console.log(number  *  number));
  //1
4
9
16
25
9
4
### Conditional Loops
**forEach() loop:**
const  myArray  = [1, 2, 3, 4, 5, 3, 2];
utilityLibrary.loop.forEach(myArray, (num) =>  console.log("Number:", num));
//Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
Number: 3
Number: 2
### Date Formatting
1. **formatDate(date, format):** Formats a date object according to the specified format.
Example:
const  currentDate  =  new  Date();//Sun Mar 03 2024 11:43:49 GMT+0530 (India Standard Time)
console.log("Formatted date:", utilityLibrary.formatDate(currentDate));
//Formatted date: March 3, 2024 at 11:43:03
### String Manipulation
Example String:
const  myString  =  "hello world";
1. **capitalize(str):** Capitalizes the first letter of a string.
Example:
console.log("Capitalized string:", utilityLibrary.string.capitalize(myString));
//Capitalized string: Hello world
2. **reverse(str):** Reverses a string.
Example:
console.log("Reversed string:", utilityLibrary.string.reverse(myString));
//Reversed string: dlrow olleh
3. **truncate(str, length):** Truncates a string to a specified length.
Example:
console.log("Truncated string:", utilityLibrary.string.truncate(myString, 5));
//Truncated string: hello...
4. **countOccurrences(str, substring):** Counts the occurrences of a substring within a string.
Example:
console.log("Word count:", utilityLibrary.string.countWords(myString));
//Word count: 2
5. **removeWhitespace(str):** Removes whitespace from the beginning and end of a string.
Example:
console.log("whiteSpace Removed:",utilityLibrary.string.removeWhitespace(myString));
//whiteSpace Removed: helloworld
6. **replace() method** searches a string for a value or a regular expression& returns new string but not changes original string.
Example:
const  replacedString  =  utilityLibrary.string.replace(myString,"world",
"javascript");
console.log("Replaced string:", replacedString);
//Replaced string: hello javascript
## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests on the GitHub repository(https://github.com/mrshri/utilitylibrary-js).
## License
This project is licensed under the Apache-2.0 License - see the LICENSE file for details.



