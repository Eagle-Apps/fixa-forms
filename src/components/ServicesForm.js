import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const ServicesForm = () => {
  const [product, setProduct] = useState({
    name: '',
    image: null,
    iconImage: null,
    price: '',
    categories: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const { name, files } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files[0],
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // handle form submission with product state data
    // console.log(product)

    try {
      const response = await fetch(
        'http://157.230.30.157/services/categories/add',
        {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )

      //   const data = await response.json()
      //   console.log(data)

      if (response.ok) {
        // if (data.status === 'success') {
        // toast.success('Registration Successful !', {
        //   position: toast.POSITION.TOP_CENTER,
        // })
        alert('Registration Successful')

        setProduct({
          name: '',
          image: null,
          iconImage: null,
          price: '',
          categories: '',
          description: '',
        })
      } else {
        // throw new Error(data.message)
        alert(
          'An error occurred during registration, please try again.',
        //   {
        //     position: toast.POSITION.TOP_CENTER,
        //   }
        )
      }
    } catch (err) {
      console.error(err)
      alert('There was an error submitting the form. Please try again later.')
    //   toast.error('There was an error submitting the form.', {
    //     position: toast.POSITION.TOP_CENTER,
    //   })
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-2xl mx-auto my-4 h-screen'
      >
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='name'
            >
              Name:
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              name='name'
              value={product.name}
              onChange={handleChange}
              id='name'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='image'
            >
              Image:
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='file'
              name='image'
              onChange={handleImageChange}
              id='image'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='iconImage'
            >
              Icon Image:
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='file'
              name='iconImage'
              onChange={handleImageChange}
              id='iconImage'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='price'
            >
              Price:
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              name='price'
              value={product.price}
              onChange={handleChange}
              id='price'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='categories'
            >
              Categories:
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              name='categories'
              value={product.categories}
              onChange={handleChange}
              id='categories'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='description'
            >
              Description:
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              name='description'
              value={product.description}
              onChange={handleChange}
              id='description'
            />
          </div>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Create Product
        </button>
      </form>
    </>
  )
}

export default ServicesForm
