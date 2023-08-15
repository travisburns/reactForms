import React from 'react'
import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

let renderCount = 0 

type FormValues = {
    username: string
    email: string
    channel: string
}



export const YoutubeForm = () => {
  
    const form = useForm<FormValues>();
    const {register, control, handleSubmit, formState } = form
    const {errors} = formState;

    const onSubmit = (data: FormValues) => {
      console.log('Form Submitted', data)
    }

  renderCount++

  return (
    <div>
      <h1>Youtube Form ({renderCount/2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
        <label htmlFor='username'>Username</label>
        <input type='text' 
        id="username" 
        {...register("username", {
          required: 'Username is required'
        })}
        />
        <p>{errors.username?.message}</p>
        </div>

        <label htmlFor='email'>Email</label>
        <input type='email' 
        id="email"
        {...register("email", {
          pattern: {
            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email format',
          }
        })}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor='channel'>Channel</label>
        <input type='text' 
        id="channel" 
        {...register("channel", {
          required: 'Channel is Required'
        })} 
        />
        <p className='error'>{errors.channel?.message}</p>
        <button onClick={() => {}}>Submit</button>

      </form>
      <DevTool control={control}/>
    </div>
  )
}


