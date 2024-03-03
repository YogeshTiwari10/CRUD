import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Users = () => {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(result => {setUsers(result.data)
        console.log(users)
        })
        .catch(err => console.log(err))
    }, [users])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result => {console.log(result)
        window.location.reload()
        })
        .catch(err => console.log(err))
    }
    

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'> Add User</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                           return <tr>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.age}</th>
                                <th> <Link to={`/update/${user._id}`} className='btn btn-success'> Update</Link>
                                 <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button>
                                 </th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users