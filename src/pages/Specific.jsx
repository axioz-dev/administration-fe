import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function Specific() {
  const { eventid } = useParams();
  const navigate = useNavigate();
  let [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("/specific", {
          value: eventid,
        });

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!data)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="p-6 ">
      {data.map((item) => (
        <div className="p-4 border border-4 border-black m-4">
          {item.userData && item.userData[0] && (
            <div className="text-xl font-bold text-center">
              {item.userData[0].collegeName}
            </div>
          )}
          {item[eventid] &&
            item[eventid].map((item) => (
              <div className="flex gap-4">
                <p className="text-base m-1">
                  <span className="text-sm font-semibold opacity-50 mr-2 ">
                    Name:
                  </span>
                  {item.name}
                </p>
                <p className="text-base m-1">
                  <span className="text-sm font-semibold opacity-50 mr-2 ">
                    Contact:
                  </span>
                  {item.contact}
                </p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Specific;

// <div>
//   <h1>{data.userData[0].collegeName}</h1>
//   {data.quiz.map((participant) => (
//     <div key={participant._id}>
//       <h2>{participant.name}</h2>
//       <p>Contact: {participant.contact}</p>
//     </div>
//   ))}
// </div>
// <div>
// {data.map(item)=><div>he</div>}
// <div/>
