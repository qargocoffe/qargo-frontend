'use client'

import  { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonCustomized } from '../button/ButtonCustomized';

export const FranciseeForm = () => {

    const [formData, setFormData] = useState<{ name: string; email: string, message: string, question1: string }>({
        name: '',
        email: '',
        message: '',
        question1: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // Handle form submission here
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <input
              className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-full hover:border-beige'
              placeholder='Name'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <input
              className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-full hover:border-beige'
              placeholder='Last name'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <input
              className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-full hover:border-beige'
              placeholder='Email'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <input
              className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-full hover:border-beige'
              placeholder='Phone'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='mt-4'>
            <input
              className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-full hover:border-beige'
              placeholder='Message'
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
        <div className='mt-4'>
        <p>1. What is your favorite color?</p>
        <label className='block'>
          <input
            type="radio"
            name="question1"
            value="Red"
            checked={formData.question1 === 'Red'}
            onChange={handleChange}
          />
          Red
        </label>
        <label className='block'>
          <input
            type="radio"
            name="question1"
            value="Blue"
            checked={formData.question1 === 'Blue'}
            onChange={handleChange}
          />
          Blue
        </label>
        <label className='block'>
          <input
            type="radio"
            name="question1"
            value="Green"
            checked={formData.question1 === 'Green'}
            onChange={handleChange}
          />
          Green
        </label>
        </div>
      </div>

          <div className='text-center mt-8'>
            <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='SUBMIT' url={''} type='button' />
          </div>
        </form >
    </div>
  )
}
