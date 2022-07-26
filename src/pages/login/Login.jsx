import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Trending from "../../components/trending/Trending"
import "./Login.css"
import swal from "sweetalert";
import { useState } from "react";




const Login = () => {

  // const [error,setError] =useState("");

  const [data,setData] = useState({
    email:"",
    password:""
  })

const navigate = useNavigate()
  const handleSubmit = async(event)=>{
    event.preventDefault();
    // try{
    //   console.log(data)
      const url = "https://boat-app-project1.herokuapp.com/api/auth";
    //   const {data:res} = await axios.post(url,JSON.stringify(data));
    //   localStorage.setItem("token",res.data);
    //   Navigate("/")
    //   console.log(res)
    // }
    // catch(err){
    //   if(err.response && err.response.status>=400 && err.response<=500){
    //     setError(error.response.data.message)
    //   }
    // }

     fetch(url,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "content-type":"application/json"
      }
    })
    .then((res)=>{
      res.json()
      .then((res)=>{
        if(res.message==="Invalid Email or Password"){
          // alert("Enter Correct Credintals")
          swal({
            title:"Error Occured",
            text: "Something went wrong",
            icon:"warning",
            dangerMode: true,
    
          })
          return;
        }
        localStorage.setItem("token",res.data);
        localStorage.setItem("name",res.name);
        
        // console.log(res)
        swal({
          title:"Login Success",
          icon:"success"
        })
        
        navigate("/")
      })
      
      // console.log(res.body);
    })
  }

  const handleChange =({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
  }

 




  return (
    <>
    <Navbar/>
    <div className="logindiv">
        <h1 className="loginh">Login</h1>
        <p className="loginp">Please enter your e-mail and password:</p> <br /> <br />
        <img className="loginfbimg" src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />
        <img className="logingooimg" src="https://developers.google.com/static/business-communications/images/logo-guidelines/do-logo-circle.png" alt="" /> <br /> <br />
        <form onSubmit={handleSubmit}  className="loginform">
        <input autoComplete="off" onChange={handleChange} value={data.email} name="email" className="logininput1" type="email" placeholder="E-mail" /> <br />
        <input autoComplete="off" onChange={handleChange} value={data.password} name="password" className="logininput1" type="password" placeholder="Password" /> <br /> <br />
       
        <button  type="submit" className="loginbutton">Login</button>
         </form>
         <br /> <br />
        <span className="loginspan1"><a className="loginnewanch1" href="new">New customer? </a></span>
        <Link className="reglink" to="/register">
        <span className="loginspan2"><a className="loginnewanch2" href="create">Create an account </a></span></Link>
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

export default Login