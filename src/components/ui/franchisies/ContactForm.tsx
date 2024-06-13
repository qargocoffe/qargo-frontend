'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonCustomized } from "../button/ButtonCustomized";


export const ContactForm = () => {
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
    <div>
        <h3 className='text-lavazzaBlue w-3/5 m-auto text-center uppercase font-semibold tracking-widest'>Contact us to schedule a call or a visit</h3>
        <form onSubmit={handleSubmit} className="px-12 ">
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

          <div className='text-center mt-8'>
            <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='SUBMIT' url={''} type='button' />
          </div>
        </form >
    <p className="text-beige text-center text-sm w-full px-8 mt-7">
      The franchising information contained in this website is not intended as an offer to sell a franchise or the solicitation of an offer to buy a franchise. The following states regulate the offer and sale of franchises and/or business opportunities: California, Connecticut, Florida, Georgia, Hawaii, Illinois, Indiana, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Nebraska, New Hampshire, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Rhode Island, South Carolina, South Dakota, Texas, Utah, Virginia, Washington and Wisconsin. If you are a resident of one of these states or provinces, we will not offer or sell you a franchise unless and until we have complied with the applicable presale registration and disclosure requirements in your state or province.
      </p>
    </div>
  )
}
