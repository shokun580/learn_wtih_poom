import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Home() {


  const [users, setUser] = useState([]);
  const [deleted , setDeleted] = useState(false);

  async function fetchData() {
    const response = await axios.get('http://localhost:3000/test/user')
    console.log(users);
    setUser(response.data);


  }

  useEffect(() => {
    fetchData();

  }, [deleted])

  async function Delete (user_id) {    
    const response = await axios.delete(`http://localhost:3000/test/deleteUser/${user_id}`);
    if(response.status === 200){
      setDeleted(true);
      fetchData();
    }

  }


  return (
    <>
     <Link class="btn btn-success" to="/add">ADD</Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">fullname</th>
            <th scope="col">role</th>
            <th scope="col" className='text-center'>province</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.user_username}</td>
              <td>{user.user_fullname}</td>
              <td>{user.user_role}</td>
              <td className='text-center'>{user.pvc_name}</td>
              <td>
               
                <Link class="btn btn-primary" to="/update">edit</Link>
                <button type="button" class="btn btn-danger" onClick={()=> Delete(user.user_id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
     


    </>
  )
}

export default Home
