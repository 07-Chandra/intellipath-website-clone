import React from "react";

import "./Highlight.scss";
import { LuMonitorUp } from "react-icons/lu";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

// interface data{
//     info : string,
//     name : string,
// }

function Highlight({ info, name }) {
    console.log("here is info", info);

    return (
        <div className="highlightor">
            <div className="head">
                <h2>{name}</h2>
            </div>

            {info
                ? info.map((item, id) => {
                      return (
                          <div className="role" key={id}>
                              <div className="icon-div">
                                  {id == 0 ? (
                                      <LuMonitorUp className="icon" />
                                  ) : (
                                      ""
                                  )}
                                  {id == 1 ? (
                                      <TbHeartRateMonitor className="icon gree" />
                                  ) : (
                                      ""
                                  )}
                                  {id == 2 ? (
                                      <BsFillRocketTakeoffFill className="icon orang" />
                                  ) : (
                                      ""
                                  )}
                                  {id == 3 ? (
                                      <BiSolidPhoneCall className="icon purpl" />
                                  ) : (
                                      ""
                                  )}
                              </div>
                              <p className="para">{item.text}</p>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
}

export default Highlight;
