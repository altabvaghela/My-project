import React, { useEffect, useState } from "react";

const Registation = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registation");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handelesubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Field Are Mandtory");
    } else {
      setFlag(true);
      setInputData(data)
    }
  }
  // console.log(inputData);

  return (
    <>
    <pre>{(flag)?<h2 className="ul-define">Hello{inputData.name},You' ve Registated Successfull</h2>:""}</pre>
      <h1>Registation Form</h1>
      <form className="form" onSubmit={handelesubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          value={inputData.name}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          value={inputData.email}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          value={inputData.password}
          onChange={handleData}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Registation;
