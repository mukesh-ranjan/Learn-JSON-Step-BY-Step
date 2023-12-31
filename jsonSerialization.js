// JavaScript object
var person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
  },
};

// Serializing the JavaScript object to a JSON-formatted string
var jsonString = JSON.stringify(person);

// Displaying the resulting JSON string
console.log(jsonString);
