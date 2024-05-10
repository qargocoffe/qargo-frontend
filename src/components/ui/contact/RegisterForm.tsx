'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { Legal } from '../main/legal/Legal';
import { ButtonCustomized } from '../button/ButtonCustomized';

export const RegisterForm = () => {
  const [formData, setFormData] = useState<{ name: string; email: string, message: string }>({
    name: '',
    email: '',
    message: '',
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
          placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='mt-4'>
        <input
          className='placeholder:px-3 p-3 bg-beigeLight w-full rounded-2xl hover:border-beige min-h-[5rem]'
          placeholder='Message'
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className='mt-4'>
          <Legal/>
      </div>
      <div className='text-center mt-8'>
        <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='SEND' url={''} type='button' />
      </div>
    </form >
  );
};
