import React, { useState } from 'react'
import '../registeration/Register.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {CREATE} from '../../utils/utls'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");

    const history = useHistory();
    // const notify = () => toast("Wow so easy!");


    const signUp=async(e)=>{
        e.preventDefault();

        
        let body= {name,email,password,password_confirmation}

        
        let url='http://202.182.97.224:8080/api/register'
        try{
            
            axios.post(url, body)
            .then(
                toast.success("You are Successfuly Registerd!"),

                response => {
                    console.log(JSON.stringify(response.data))
                }
                
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });
                console.log(url)

        }
        catch(err){
            console.log(err.message)
        }
    }

    const resetValues = () => {
        setname("")
        setemail("")
        setpassword("")
        ("")

      }




    return (
        <div >
            <div className="login-border mb-2 p-4">
                <div className="row">
                    <div align="center" className="col mb-5">
                        <h2>Register</h2>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <form action="" onSubmit={signUp}>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        </div>
                        <div className="form-check">
                            <div>

                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember</label>
                            </div>
                            <div className="d-flex">
                                <p style={{ marginRight: "5px" }}>Already have an account?</p>
                                <a href="/">Login</a>
                            </div>
                        </div>
                        <button type="submit"  style={{ width: "100%" }} className="btn btn-primary mt-5 mb-5">Submit</button>
                        {/* <button onClick={notify}>Notify!</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>


    )
}

export default Register
