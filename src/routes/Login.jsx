import React, { useState } from 'react'

export const Login = () => {
    const [email, setemail] = useState("");
    const [pass, setpassword] = useState("");

    const handleinput = (e) => {
        // console.log(e.target.value)
        setemail(e.target.value);
      };
    
      const handlepass = (e) => {
        // console.log(e.target.value)
        setpassword(e.target.value);
      };

      
  const handleAdd = () => {
    const payload = {
      email,
      password: pass,
    };

    // connecting FE with BE
    fetch("https://wild-puce-cockatoo-kilt.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <input type="text" placeholder='Email' onChange={handleinput}
        value={email}/>
        <input type="text" placeholder='Password' onChange={handlepass}
        value={pass}/>
        <button onClick={handleAdd}>Login</button>
    </div>
  )
}
