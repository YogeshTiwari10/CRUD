import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateUsers = () => {

  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
}, [id])

const submit = (e) => {
  e.preventDefault();
  console.log(name, email, age)
  axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
  .then(result => {
    console.log(result)
    navigate("/")
  })
  .catch(err => console.log(err))
}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={submit}>
        <h2>Update User</h2>
        <div className='mb-2'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter Name' value={name} className='form-control' onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter E-Mail' value={email} className='form-control' onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Age</label>
          <input type="text" placeholder='Enter Age' value={age} className='form-control' onChange={(e)=> setAge(e.target.value)} />
        </div>
        <button className='btn btn-success'type='submit'>Update</button>
      </form>
    </div>
</div>
  )
}

export default UpdateUsers