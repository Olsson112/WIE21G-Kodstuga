import './style.css'

interface User {
  username: string, 
  password: string
}

// LOOPING

const userList: User[] = [
  {
    username: "Kalle",
    password: "123" 
  },
  {
    username: "Pelle",
    password: "abc" 
  },
  {
    username: "Johanna",
    password: "qwe" 
  },
  {
    username: "Anita",
    password: "987" 
  }
]

for(let i = 0; i > userList.length; i++) {
  let user = userList[i]
}

userList.forEach((user) => {
  let container = document.createElement("div")
  let usernameHeader = document.createElement("h2")
  usernameHeader.textContent = user.username

  container.append(usernameHeader)
  document.body.append(container)
})


// INTERFACES IN CLASSES



class Person implements User {

  public username = ""
  public password: string = ""

  public user: User = {
    username: "Fredrik",
    password: "567"
  }

  constructor() {

  }

}