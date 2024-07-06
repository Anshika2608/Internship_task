import  { useState } from "react";
import Input from "../Input/Input";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function React_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Please fill all the details");
    } else {
        localStorage.setItem("userDetails", JSON.stringify({ name, email, password }));
        navigate("/second");
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline flex justify-center mt-12">
        React Form
      </h1> 

      <div className="flex justify-center items-center flex-col gap-4 mt-20">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      
      <div className="flex justify-center mt-10">
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

    </>
  );
}

export default React_form;