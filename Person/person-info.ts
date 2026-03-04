import User from "../Person/user";

let user1 = new User("John", "Doe", "Smith", new Date(1990, 5, 15), "john.doe@example.com", "Single");
console.log(`Full Name: ${user1.getFullName()}`);
console.log(`Age: ${user1.getAge()}`);
console.log(`Email Domain: ${user1.getEmailDomain()}`);
console.log(`Marital Status: ${user1.getMaritalStatus()}`);