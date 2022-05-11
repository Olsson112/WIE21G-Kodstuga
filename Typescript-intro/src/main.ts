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



type fullnameFunc = (firstName: string, lastName?: string) => string 

interface FullnameFuncV1 {
  (firstName: string, lastName: string): string
}

interface PersonInterface {
  firstName: string,
  lastname: string,
  getFullNameV2: fullnameFunc
}

function getFullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName
}

const getFullNameV1: (firstName: string, lastName: string) => string = (firstName, lastName) => { return firstName + " " + lastName }

const getFullNameV2: fullnameFunc = (firstName, lastName) => { 
  //return firstName + " " + (lastName ? lastName.length : "")
  if(lastName) {
    return firstName + " " + lastName.length 
  }
  return firstName
}

const getFullNameV3: FullnameFuncV1 = (firstName, lastName) => { return firstName + " " + lastName }


const myPerson: PersonInterface = {
  firstName: "Kalle",
  lastname: "Larsson",
  getFullNameV2: (firstName, lastName) => { return firstName + " " + lastName }
}

const myName = getFullNameV1("Kalle", "Kula")

console.log(getFullNameV1("Kalle", "Kula"))


interface PersonClassData {
  firstName: string
  lastName: string
}

type getBirthdate = () => string

abstract class Person implements PersonClassData {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  firstName: string
  lastName: string
  
  abstract getDateOfBirth: getBirthdate
  abstract getFullname: () => string
}

class Student extends Person {
  constructor(firstName: string, lastName: string, SSN: string) {
    super(firstName, lastName)
    this.SSN = SSN
  }

  private SSN: string

  getDateOfBirth = () => {
    return this.SSN.split("-")[0]
  }

  getFullname = () => super.firstName + " " + this.lastName;
}

const newPerson = new Student("Victor", "Olsson", "920316-4433")

newPerson.getDateOfBirth()
newPerson.getFullname()


// Genereic Types

const last = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}

const l = last<number>([1, 2, 3])
const lv2 = last<string>(["a", "b", "c"])

const makeArr = <X, Y>(x: X, y: Y) => {
  return [x, y]
}

const newArray = makeArr("", "")

const arrReadOnly: ReadonlyArray<number> = []

const makeNumberArr = (x: number, y: number): number[] => {
  return [x, y]
}

const makeStringArr = (x: string, y: string): string[] => {
  return [x, y]
}