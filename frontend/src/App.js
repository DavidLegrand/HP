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
        points: 0
      },
      {
        name: "ravenclaw",
        points: 333
      },
      {
        name: "gryffindor",
        points: 666
      },
      {
        name: "hufflepuff",
        points: 1000
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