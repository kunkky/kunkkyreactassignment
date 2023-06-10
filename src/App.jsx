import React from 'react'
import UserInfo from './components/UserInfo'
import { useState } from "react";
//import my css
import "./Style.css"
//make an array of users to consume
const userInformations = [
  {
    username: "kunle",
    lastname: "ademuyiwa",
    email: "kunkkykunkky@gmail.com",
    phone: "08104048887"
  },
  {
    username: "kunle",
    lastname: "ademuyiwa",
    email: "kunkkykunkky@gmail.com",
    phone: "08104048887"
  },
  {
    username: "kunle",
    lastname: "ademuyiwa",
    email: "kunkkykunkky@gmail.com",
    phone: "08104048887"
  },
  {
    username: "kunle",
    lastname: "ademuyiwa",
    email: "kunkkykunkky@gmail.com",
    phone: "08104048887"
  },
  {
    username: "kunle",
    lastname: "ademuyiwa",
    email: "kunkkykunkky@gmail.com",
    phone: "08104048887"
  }
]


const App = () => {


  //use state here to update the component and pass the created users in the use state
  const [users, setUsers] = useState(userInformations)


  return (

    <div className='App'>
      {/* pass the default set state to ur componet */}
      <UserInfo info={users}/>
    </div>
  )
}

export default App