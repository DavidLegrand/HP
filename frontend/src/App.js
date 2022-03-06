import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Hourglass from "./Hourglass";
const ENDPOINT = "http://localhost:4001";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    setData([
      {
        name: "slytherin",
        points: 500
      },
      {
        name: "ravenclaw",
        points: 250
      },
      {
        name: "gryffindor",
        points: 750
      },
      {
        name: "hufflepuff",
        points: 1
      }
    ])
    // const socket = socketIOClient(ENDPOINT);
    // socket.on("FromAPI", apiData => {
    //   console.log(JSON.parse(apiData))
    //   setData(JSON.parse(apiData))
    // });
    //return () => socket.disconnect();
  }, []);

  return <Hourglass data={data} />;
}

export default App;