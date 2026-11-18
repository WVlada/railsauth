import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [res, setRes] = useState(null);

  const fetchAPI1 = async () => {
    let resPonse = await fetch("http://localhost:3001/api/v1/posts", {
      method: "GET",
    });
    console.log(await resPonse.json());
  };

  useEffect(() => {
    const fetchResponse = async () => {
      let resPonse = await fetch("http://localhost:3001", {
        method: "GET",
      });
      setRes(await resPonse.json());
    };
    fetchResponse();
    fetchAPI1();
  }, []);
  console.log("Response:", res);
  return (
    <div>
      <Button>Rails API + React</Button>
    </div>
  );
}

export default App;
