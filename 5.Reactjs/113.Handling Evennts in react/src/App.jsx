import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("tutul");
  // const [form, setForm] = useState({ email: "", phone: "" });
  const [form, setForm] = useState({});

  const handleClick = () => {
    alert("btn is clicked");
  };
  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form);
  };

  // const handleMouseOver = () => {
  //   alert("Hey, this is mouse over");
  // };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a mouseOver
      </div> */}

      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
