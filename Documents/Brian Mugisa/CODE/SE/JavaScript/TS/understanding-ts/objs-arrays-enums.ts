// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string];
// } = {
//   name: "Brian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Brian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

//let favouriteActivities: any;
let favouriteActivities: any[]; //here at least tell TS  favouriteArray is an array of sth; so asl ong as use an array, can store anything in there
//but you want to avoid this as much as possible - it takes away from TS functionality
//just use as a fallback if have some kind of data that you dont know whay type stired in there + doing runtime checks
//BUT IF YOU HAVE IDEA OF DATA TYPE, BEXPLICIT LET TS USE INFERENCE, OR SET OWN TYPES - DONT FALL BACK TO ANY IF YOU DONT NEED TO
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

//ANY TYPE: most flexible assingable type in TS - tells ts nothing, you can store any value in there - no specific type assignment; TS never yell when you use any
