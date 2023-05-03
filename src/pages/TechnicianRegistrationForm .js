import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TechnicianRegistrationForm = () => {
  // const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Handle form submission logic here
    // setLoading(true)
    try {
      const response = await fetch(
        'http://157.230.30.157/technician/register',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )

      if (response.ok) {
        // if (data.status === 'success') {
        toast.success('Registration Successful !', {
          position: toast.POSITION.TOP_CENTER,
        })

        setFormData({
          name: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
        })
      } else {
        // throw new Error(data.message)
        toast.error(
          'An error occurred during registration, please try again.',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        )
      }
    } catch (err) {
      console.error(err)
      // alert('There was an error submitting the form. Please try again later.')
      toast.error('An error occurred during registration, please try again.', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <>
      <ToastContainer className='mt-[9rem]' />

      <form className='max-w-6xl mx-[12rem] my-8' onSubmit={handleSubmit}>
        <h2 className='text-4xl font-bold mb-4 leading-7 text-gray-500'>
          Become A Technician
        </h2>
        <div className='mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label className='block mb-2 font-medium leading-6 ' htmlFor='name'>
              First Name
            </label>
            <div className='mt-2'>
              <input
                className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type='text'
                name='name'
                id='name'
                autoComplete='given-name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='sm:col-span-3 mt-4'>
            <label
              className='block mb-2 font-medium leading-6'
              htmlFor='lastName'
            >
              Last Name
            </label>
            <div className='mt-2'>
              <input
                className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type='text'
                name='lastName'
                id='lastName'
                autoComplete='family-name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='sm:col-span-4 mt-4'>
          <label className='block mb-2 font-medium leading-6' htmlFor='email'>
            Email
          </label>
          <div className='mt-2'>
            <input
              className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='sm:col-span-4 mt-4'>
          <label
            className='block mb-2 font-medium leading-6'
            htmlFor='password'
          >
            Password
          </label>
          <div className='mt-2'>
            <input
              className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type='password'
              name='password'
              id='password'
              autoComplete='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='sm:col-span-4 mt-4'>
          <label
            className='block mb-2 font-medium leading-6'
            htmlFor='confirmPassword'
          >
            Confirm Password
          </label>
          <div className='mt-2'>
            <input
              className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              autoComplete='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='sm:col-span-4 mt-4'>
          <label className='block mb-2 font-medium leading-6' htmlFor='phone'>
            Phone
          </label>
          <div className='mt-2'>
            <input
              className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type='tel'
              name='phone'
              id='phone'
              autoComplete='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='sm:col-span-4 mt-4'>
          <label className='block mb-2 font-medium leading-6' htmlFor='address'>
            Address
          </label>
          <div className='mt-2'>
            <input
              className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type='text'
              name='address'
              id='address'
              autoComplete='phone'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* <div className='grid grid-cols-2 gap-4 mt-4'> */}
        <div className='sm:col-span-4 mt-4'>
          <div>
            <label className='block mb-2 font-medium leading-6' htmlFor='city'>
              City
            </label>
            <div className='mt-2'>
              <input
                className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type='text'
                name='city'
                id='city'
                autoComplete='city'
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='mt-4'>
            <label className='block mb-2 font-medium leading-6' htmlFor='state'>
              State
            </label>

            <div className='mt-2'>
              <input
                className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type='text'
                name='state'
                id='state'
                autoComplete='state'
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <label className='block mb-2 font-medium leading-6' htmlFor='zipCode'>
            Zip Code
          </label>
          <input
            className='block w-full rounded-md border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type='text'
            name='zipCode'
            id='zipCode'
            autoComplete='zipCode'
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className='mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default TechnicianRegistrationForm
