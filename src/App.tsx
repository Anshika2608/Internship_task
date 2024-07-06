import  { useState } from "react";
import Input from "./Components/Input/Input";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      
    </>
  );
}

export default App;
