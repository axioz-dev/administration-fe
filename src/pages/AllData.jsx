import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useReactToPrint } from "react-to-print";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";

function AllData() {
  let [data, setData] = useState(null);
  let [myRefs, setMyRefs] = useState([]);
  let [printContent, setPrintContent] = useState(null);
  // Create an array of refs
  const handlePrint = useReactToPrint({
    content: () => printContent,
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/all");
        setData(response.data);
        setMyRefs(response.data.map(() => React.createRef()));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!data)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      {data.map((item, index) => (
        <div
          ref={myRefs[index]}
          className="p-2 mt-3 mb-28 mx-2 flex flex-col bg-slate-400 border-slate-700 border-4  "
          key={item.joinedData?._id}
        >
          <div className="mt-2">
            {" "}
            <PrintIcon
              className="ml-2"
              onClick={() => {
                setPrintContent(myRefs[index].current);
                handlePrint();
              }}
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-2">
            {" "}
            {item.collegeName}
          </h1>
          {item.registrations.map((registration) =>
            registration &&
            [
              "quiz",
              "productLaunch",
              "ItManager",
              "gaming",
              "coding",
              "webDesigning",
              "photoAndVideo",
              "cultural",
            ].every((event) => registration[event]) ? (
              <div className=" flex flex-wrap justify-center  p-4 gap-8 rounded-xl  border-slate-700 border-2 mb-8  bg-slate-100">
                {[
                  "quiz",
                  "productLaunch",
                  "ItManager",
                  "gaming",
                  "coding",
                  "webDesigning",
                  "photoAndVideo",
                  "cultural",
                ].map((event) => (
                  <div
                    key={event}
                    className="border border-black  p-1 rounded-md w-1/5"
                  >
                    <h3 className="text-lg uppercase text-center font-semibold bg-slate-400 rounded-md">
                      {event}
                    </h3>
                    {registration[event].map((participant) => (
                      <div className="my-3">
                        <p className="text-base m-1">
                          <span className="text-sm font-semibold opacity-50 mr-2 ">
                            Name:
                          </span>
                          {participant.name}
                        </p>
                        <p className="text-base m-1">
                          <span className="text-sm font-semibold opacity-50 mr-2 ">
                            Contact:
                          </span>
                          {participant.contact}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      ))}
    </>
  );
}

export default AllData;
