import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YoutubeForm from './components/YoutubeForm'
import {useForm} from 'react-hook-form'

function App() {
 


  const { register, handleSubmit } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input {...register("firstName")} id="firstName" />

      <label>Last Name:</label>
      <input {...register("firstName")}  />

      <label>Gender</label>
      <select {...register("gender")}>
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input {...register("username")} />

      <label>Email</label>
      <input {...register("email")}  />

      <label>About you</label>
      <textarea  />

      <input type="submit" />
    </form>
  );
 
}

export default App
