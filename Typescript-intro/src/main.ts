import './style.css'

let myString: string;


interface Fordon {
  brand: string
}

interface Bil extends Fordon {
  doors: string[]
}

interface Motorcykel extends Fordon {
  footPegs: string[]
}

let car: Bil = {
  brand: "BMW",
  doors: ["Dörr 1", "Dörr 2"]
}


interface User {
  name: string, 
  age: number
}

let users: User[] = [{
  name: "Victor",
  age: 30
}]


const addUser: (name: string, age: number) => void = (name, age) => {
  const newUserList = [ ...users, {name, age} ]

  users = newUserList
  //users.push({name: name, age})
}


const calculateNumbers: (numOne: number, numTwo: number) => number = (x, y) => {
  return x + y
}

console.log(calculateNumbers(10, 20))

const logUsers: (users: User[]) => void = (users) => {
  users.forEach((user) => {
    let { name, age } = user
    console.log(name, age)
  })
}

console.log(users);
addUser("Kalle", 99)
console.log(users);
logUsers(users)