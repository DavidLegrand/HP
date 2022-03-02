import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", apiData => {
      console.log(JSON.parse(apiData))
      setData(JSON.parse(apiData))
    });
    return () => socket.disconnect();
  }, []);

  return (<>{
    data && data.map(({ name, points }) =>
      <div style={{ width: '25%', textTransform: 'capitalize', float: 'left', textAlign:'center' }}>
        <h1>{name}</h1>
        <h2>{points}</h2>
      </div>
    )
  }</>);
}

export default App;