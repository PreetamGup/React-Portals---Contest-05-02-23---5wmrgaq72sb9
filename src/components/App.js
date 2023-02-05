import React, { useState, useRef } from "react";
// import '../styles/App.css';
import PortalButton from "./PortalButton.js";
import PortalTextArea from "./PortalTextArea.js";

//complete the function
const App = () => {
  const [state, setstate] = useState("");
   const [text, settext] = useState("");

  // let text='';
  const handleInput = () => {
   settext(state);
    setstate("");
  };

  return (
    <div id="main">
      <input
        id="input"
        value={state}
        onChange={(e) => setstate(e.target.value)}
      ></input>
      <br />
      <PortalButton buttonclick={handleInput} />
      <br />
      <PortalTextArea value={text} />
    </div>
  );
};

export default App;
