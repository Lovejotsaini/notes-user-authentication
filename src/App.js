import React,{useState,useEffect} from 'react'
import NavBar from './component/NavBar';
import "./index.css"


const App = (props) => {
const [userLoggedIn,setUserLoggedIN]=useState(false)

const handleAuth=()=>{
  setUserLoggedIN(!userLoggedIn)
}

useEffect(()=>{
  if(localStorage.getItem('token')){
    handleAuth()
  }
},[])

  return (
    <div>
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />


    </div>
  )
}

export default App;
