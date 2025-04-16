import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [provinces, setProvinces] = useState([]);

  const navigate = useNavigate();

  async function fetchData() {
    const response = await axios.get('http://localhost:3000/test/create')
    //console.log(users);
    setProvinces(response.data);


  }

  useEffect(() => {
    fetchData();
    
    
  }, [])

  const [user , setUser] = useState({
    user_username: "",
    user_name_title: "",
    user_fullname: "",
    user_password: "",
    user_role: "",
    province: ""
  });


  async function handleSubmit(event) {
    try{
    console.log(user);
    const response = await axios.post('http://localhost:3000/test/createUser', user);
    
    navigate('/');

    
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <form className='card'  >
        <div class="mb-3">
          <label for="user_username" class="form-label">username</label>
          <input type="text" class="form-control" id="user_username" onChange={(e)=>user.user_username = e.target.value} />
        </div>
        <div class="mb-3">
          <label for="user_fullname" class="form-label">full name</label>
          <input type="text" class="form-control" id="user_fullname" onChange={(e)=>user.user_fullname = e.target.value}/>
        </div>
        <div class="mb-3">
          <label for="user_name_title" class="form-label">name title</label>
          <input type="text" class="form-control" id="user_name_title"  onChange={(e)=>user.user_name_title = e.target.value} />
        </div>
        <div class="mb-3">
          <label for="user_fullname" class="form-label">province</label>
          <select class="form-select" id="province" aria-label="Default select example"  onChange={(e)=>user.province = e.target.value}>
            {provinces.map((province, index) => (
              <option selected value={province.pvc_id}>{province.pvc_name}</option>
            ))}
          </select>
        </div>
        <div class="mb-3">
          <label for="user_role" class="form-label">role</label>
          <select class="form-select" id="user_role"aria-label="Default select example"  onChange={(e)=>user.user_role = e.target.value}>
            <option selected value="Volunteer">Volunteer</option>
            <option selected value="Province Officer">Province Officer</option>
            <option selected value="Central Officer">Central Officer</option>
            
          </select>
        </div>

        <div>
          <label for="user_password" class="form-label">password</label>
          <input type="password" class="form-control" id="user_password"  onChange={(e)=>user.user_password = e.target.value} />
        </div>

  
      <div  class="btn btn-primary mt-3" onClick={() => handleSubmit()}>Submit</div>
    </form >
    </>
  )
}

export default Add
