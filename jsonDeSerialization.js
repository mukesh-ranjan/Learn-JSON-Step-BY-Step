// Assume we make a request to an imaginary API and receive the following JSON response
var jsonResponse =
  '{"userId": 1, "username": "john_doe", "posts": [{"id": 101, "title": "First Post"},  {"id": 102, "title": "Second Post"}]}';

// Deserializing the JSON response into a JavaScript object
var userData = JSON.parse(jsonResponse);

// Accessing and displaying user information and postUser ID: 1
console.log("Username:", userData.username); // Output: Username: john_doe
console.log("Posts:", userData.posts); // Output: Posts: [ { id: 101, title: 'First Posts
console.log("User ID:", userData.userId); // Output: ' }, { id: 102, title: 'Second Post' } ]
console.log("First Post Title:", userData.posts[0].title); // Output: First Post Title: First Post
