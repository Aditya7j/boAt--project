import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Trending from '../../components/trending/Trending'
import Footer from '../../components/footer/Footer'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./register.css";
import swal  from 'sweetalert';
const Register = () => {

  const [error,setError] =useState("");

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleChange =({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
      const url = "https://boat-app-project1.herokuapp.com/api/users";
      const {data:res} = await axios.post(url,data);
      console.log(res);
      swal({
        title:"Register Success",
        text:data.message,
        icon:"success",
        
      })
      navigate("/login")
      // console.log(res.message)

    }
    catch(err){
      if(err.response && err.response.status>=400 && err.response<=500){
        setError(error.response.data.message)
      
      }
      swal({
        title:"Error Occured",
        text: err.response.data.message,
        icon:"warning",
        dangerMode: true,

      })
      
    }
    // fetch(url,{
    //   method:"POST",
    //   body:JSON.stringify(data),
    //   headers:{
    //     "content-type":"application/json"
    //   }
    // })
    // .then((res)=>{
    //   console.log(res);
    // })

  }

  // const handleregistersuccess=()=>{
  //   swal({
  //           title: "Register Success!",
  //           icon: "success",
  //   })
  // }

  return (
    <>
    <Navbar/>
    <div className="logindiv">
        <h1 className="loginh">Register</h1>
        <p className="loginp">Please fill in the fields below:</p> <br /> <br />
        <form onSubmit={handleSubmit} className="registerform">
        <input onChange={handleChange} required name='firstName' value={data.firstName} className="logininput1" type="text" placeholder="First Name" /> <br />
        <input onChange={handleChange} required name='lastName' value={data.lastName} className="logininput1" type="text" placeholder="Last Name" /> <br /> 
        <input onChange={handleChange} required name='email' value={data.email} className='logininput1' type="email" placeholder='E-mail' /> <br />
        <input onChange={handleChange} required name='password' value={data.password} className='logininput1' type="password" placeholder='Password' /> <br />
        {error && <div className='errordiv'>{error}</div>}
        <button  type='submit' className="loginbutton">CREATE ACCOUNT</button> 
        </form>
        <br /> <br />
        <span className="loginspan1"><a className="loginnewanch1" href="new">Already have an account? </a></span>
        <Link to="/login">
        <span className="loginspan2"><a className="loginnewanch2" href="create">Login </a></span></Link>
        <br /> <br /> <br /> <br />
        <Trending/>

        <div className="India">
        <p className="indiap">India's fastest growing audio & wearables brand. The most incredible range of wireless <span className="white">earphones,</span>
        <span className="white"> earbuds, </span> <span className="white">headphones,</span> <span className="white">smart watches,</span> <span className="white">and home audio.</span>
        <br /> From workouts to adventures, boAt will get you sailing!</p>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Register