import React, { useState } from "react";

function App() {
  const nome = React.useState("Gabriela");

  const [time, setTime] = useState("Flamengo");

  // const [state, setState] = useState("Flamengo");
  const state = useState("Flamengo");
  const time1 =  state[0];
  const setTime1 =  state[1];

  return (
    <div>
      <p>{nome}</p>
      <p>{time}</p>
      <p>{time1}</p>

      <button onClick={() => setTime("mengão")}>Troca time</button>
      <button onClick={() => setTime1("mengão")}>Troca time 1</button>
    </div>
  )
}

export default App;