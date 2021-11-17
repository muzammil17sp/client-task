import React, { useState, useEffect } from 'react'
import '../registeration/Login.css'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [show, setShow] = useState(false)
    const [error,seterror] = useState("")


    const history = useHistory();
    if (localStorage.getItem('user-info')) {
        history.push("/nftcollection")
    }

    async function loginButton(e) {
        e.preventDefault();
        let item = { email, password }
        console.log(item)
        try {
            let result = await fetch("http://202.182.97.224:8080/api/login", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            result = await result.json();
            if (result?.message){
                seterror(result?.message)
              }
              else{

                localStorage.setItem('user-info', JSON.stringify(result));

                if (localStorage.getItem('user-info')) {
                    history.push("/nftcollection")
                }
                
             }

            console.log(result);
            // console.log("result",result);
            

        } catch (error) {
            console.log(error);

            setShow(false)
            if (error.message == 'Request failed with status code 406') {
                document.getElementById('login-error').innerText = 'Email is not verified !'
            }
            else {
                setShow(false)
                console.log(error.message)
                document.getElementById('login-error').innerText = 'The Username or Password you entered is incorrect.'

            }
        }


    }



    useEffect(() => {

        if (localStorage.getItem('user-info')) {
            history.push("/nftcollection")
        }

    }, [])


    return (
        <div >
            <div className="login-border mb-2 p-4">
                <div className="row">
                    <div align="center" className="col mb-5">
                        <h2>Login</h2>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <form action="" onSubmit={loginButton}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} autocomplete="on" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                         <p >{error.email}</p>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                        </div>
                       {error &&  <p style={{color: 'red'}} id='login-error'>{error}</p> } 

                        <div className="form-check">
                            <div>

                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember</label>
                            </div>
                            <div className="d-flex">
                                <p style={{ marginRight: "5px" }}>Create your account</p>
                                <a href="/register">Signup</a>
                            </div>
                        </div>
                        <button type="submit"  style={{ width: "100%" }} className="btn btn-primary mt-5 mb-5">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login
