import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl text-blue-500 text-center p-4 ">OPTIONS</h1>
      <div className="flex justify-center items-center w-screen p-10">
        <Button variant="outlined" onClick={() => navigate("/all-data")}>
          All Data
        </Button>
      </div>
      <div className="flex justify-center items-center w-screen p-10 gap-8">
        <Button variant="outlined" onClick={() => navigate("/specific/quiz")}>
          quiz
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/specific/productLaunch")}
        >
          product launch
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/specific/ItManager")}
        >
          it manager
        </Button>
        <Button variant="outlined" onClick={() => navigate("/specific/gaming")}>
          gaming
        </Button>
        <Button variant="outlined" onClick={() => navigate("/specific/coding")}>
          coding
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/specific/webDesigning")}
        >
          web desiging
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/specific/photoAndVideo")}
        >
          photo and videography
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/specific/cultural")}
        >
          dance
        </Button>
      </div>
    </div>
  );
}

export default Home;
