import { useState } from "react";
import React from "react";

function App() {
  const [image, setImage] = useState();
  const [username, setUsername] = useState("");

  const send = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", username);
    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <input 
      type="text"
      onChange={(event) => setUsername(event.target.value)}
      ></input>
      <input
        type="file"
        onChange={(event) => setImage(event.target.files[0])}
      ></input>
      <button onClick={send}>Send</button>
    </>
  );
}
export default App;

