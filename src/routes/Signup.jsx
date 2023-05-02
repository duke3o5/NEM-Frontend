import React, { useState } from "react";

export const Signup = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");

  const handlename = (e) => {
    // console.log(e.target.value)
    setname(e.target.value);
  };

  const handlegender = (e) => {
    // console.log(e.target.value)
    setgender(e.target.value);
  };

  const handlepass = (e) => {
    // console.log(e.target.value)
    setpass(e.target.value);
  };

  const handlemail = (e) => {
    // console.log(e.target.value)
    setemail(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      name,
      email,
      gender,
      password: pass,
    };
    console.log(payload);
    fetch("https://wild-puce-cockatoo-kilt.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={handlename}
        value={name}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={handlemail}
        value={email}
      />
      <input
        type="text"
        placeholder="Gender"
        onChange={handlegender}
        value={gender}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={handlepass}
        value={pass}
      />
      <button onClick={handleAdd}>Sign Up</button>
    </div>
  );
};
