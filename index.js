// Define the User class
class User {
  constructor(email, username, password) {
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

// Create three user objects with different information
const user1 = new User("user1@example.com", "user1_username", "password1");
const user2 = new User("user2@example.com", "user2_username", "password2");
const user3 = new User("user3@example.com", "user3_username", "password3");

// Display user information
console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("User 3:", user3);
