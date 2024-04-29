import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className="flex w-screen h-screen bg justify-center items-center">
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        {/* <CircularProgress color="success" /> */}
        {/* <CircularProgress color="inherit" /> */}
      </Stack>
      <h6 className="ml-6">Loading</h6>
    </div>
  );
}

export default Loader;
