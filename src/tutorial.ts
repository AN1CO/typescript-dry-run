// warnings are cryptic, but look at the very end of the errors
// cant jut drop a ts file in a browser, browser can only understand
// html, js, files. need to transpile. not important to know rn

// TS adds functionality to javssciprt. valid javascript is fine too
// TS explicitly asks for TYPES (string, number, array, object, etc
// when vanilla javascript will just take whatever

// takes two numbers, outputs a number
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(2, 5));

function sayHello(name: string, age: number | string): string {
  const label = `Hello I am ${name}, I am ${age} years old!`;
  return label;
}
console.log(sayHello("Lobo", 6));
console.log(sayHello("Lobo", "6"));

function addFriend(
  sourceFriend: {
    name: string;
    age: number | string;
    email: string;
    favoriteFood: string;
    location: string;
    friendsList: [];
  },
  destinationFriend: {
    name: string;
    age: number | string;
    email: string;
    favoriteFood: string;
    friendsList: [];
  }
) {
  console.log("Successfully added friend", +destinationFriend.name);
}

// use this to only declare complex properties once to use in multiple
// functions. YOU CAN ALSO NEST INTERFACES INTO OTHER INTERFACES:
// have an interface with a property that is another interface
interface Friend {
  name: string;
  age: number | string;
  email: string;
  // array of string
  favoriteFood: string[];
  // array of number
  favoriteBets: number[];
  // array of interfaces
  friendsList: Friend[];
  // optional type, add question mark
  location?: string;
}

function addFriendV2(sourceFriend: Friend, destinationFriend: Friend) {
  console.log("Successfully added friend", +destinationFriend.name);
}

// can make a const as a type of your interface
const Lobo: Friend = {
  name: "Lobo",
  age: 6,
  email: "lobo@notadog.com",
  favoriteFood: "cheese",
  friendsList: []
};
