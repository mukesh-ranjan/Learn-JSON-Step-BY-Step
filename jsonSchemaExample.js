const Ajv = require("ajv");

// JSON Schema
const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "integer",
      minimum: 0,
    },
    address: {
      type: "object",
      properties: {
        street: { type: "string" },
        city: { type: "string" },
        state: { type: "string" },
        postalCode: { type: "string" },
      },
      required: ["street", "city", "state", "postalCode"],
    },
  },
  required: ["name", "age", "address"],
};

// JSON data to validate
const jsonData = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
  },
};

// Create Ajv instance
const ajv = new Ajv();
const validate = ajv.compile(schema);

// Validate the JSON data
const isValid = validate(jsonData);

if (isValid) {
  console.log("The JSON data is valid according to the schema.");
} else {
  console.log("Validation errors:", validate.errors);
}
