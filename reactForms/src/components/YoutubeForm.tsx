// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0 


// const YoutubeForm = () => {

//   const form = useForm();
//   const {register, control } = form
 

//  renderCount++
//   return (
    
//     <div className='form'>
//       <h1>YouTube Form({renderCount/2}) </h1>
//       <form>
//         <label htmlFor='username'>Username</label>
//         <input type="text" id="username" {...register("username")}/>

//         <label htmlFor='email'>E-mail</label>
//         <input type="email" id="email" {...register("email")}/>

//         <label htmlFor='username'>Username</label>
//         <input type="text" id="channel" {...register("channel")}/>
        
//         <button>Submit</button>
//       </form>
//       <DevTool control={control}/>
//     </div>
//   )
// }

// export default YoutubeForm



//hook form 2 -form setup: create the functional component, create a corm within the div, create a label with username text, username, repeate the rest but change values 
import React from 'react'
import {useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

let renderCount = 0;

type FormValues = {
  username: string
  email: string 
  channel: string 
}

function YoutubeForm() {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit } = form
  
  const onSubmit = (data: FormValues) => {
    console.log('Form Submit', data)
  }

  renderCount++

  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <label htmlFor='username'>Username</label>
        <input 
        type="text" 
        id="username" 
       {...register("username")}
       />

        <label htmlFor='email'>E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor='channel'>Channel</label>
        <input type="text" id="Channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool  control={control}/>
    </div>
  )
}

export default YoutubeForm
