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
          className="p-2 mt-3 mb-28 mx-2 flex flex-col bg-[#e7eaf6] border-slate-700 border-4 rounded-xl "
          key={item.joinedData?._id}
        >
          <div className="mt-2 hover:cursor-pointer">
            {" "}
            <PrintIcon
              className="ml-2"
              onClick={() => {
                setPrintContent(myRefs[index].current);
                handlePrint();
              }}
            />
          </div>
          <h6 className="text-center text-sm opacity-55 font-serif">Ekashunyam</h6>
          <h1 className="text-3xl font-bold text-center mb-4">
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
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 justify-center  p-4 gap-8 rounded-xl  border-slate-700 border-2 mb-8  bg-slate-100">
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
                    className="border-[2.5px] border-black  rounded-md bg-[#dbd8e3] overflow-hidden"
                  >
                    <h3 className="text-lg uppercase text-center font-semibold bg-[#fdb44b] py-2 ">
                      {event}
                    </h3>
                    {registration[event].map((participant) => (
                      <div className="my-3 px-2">
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
