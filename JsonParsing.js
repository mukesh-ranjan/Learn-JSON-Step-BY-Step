// JSON-formatted string
var jsonString = '{"name": "John Doe", "age": 30, "isEmployed": true}';

// Parsing the JSON string into a JavaScript object
var parsedObject = JSON.parse(jsonString);

// Accessing values from the parsed object
console.log("Name:", parsedObject.name); // Output: Name: John Doe
console.log("Age:", parsedObject.age); // Output: Age: 30
console.log("Employment Status:", parsedObject.isEmployed); // Output: Employment Status: true
