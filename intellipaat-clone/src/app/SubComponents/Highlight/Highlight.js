import React from "react";

import "./Highlight.scss";
import { LuMonitorUp } from "react-icons/lu";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

function Highlight() {
    return (
        <div className="highlightor">
            <div className="head">
                <h2>Program Highlights</h2>
            </div>

            <div className="role">
                <div className="icon-div">
                    <LuMonitorUp className="icon" />
                </div>
                <p className="para">50+ Live Sessions across 6 Months</p>
            </div>
            <div className="role">
                <div className="icon-div green">
                    <TbHeartRateMonitor className="icon gree" />
                </div>
                <p className="para">
                    Resume Preparation and LinkedIn Profile Review
                </p>
            </div>
            <div className="role">
                <div className="icon-div orange">
                    <BsFillRocketTakeoffFill className="icon orang" />
                </div>
                <p className="para">30+ Industry Projects and Case Studies</p>
            </div>
            <div className="role">
                <div className="icon-div purple">
                    <BiSolidPhoneCall className="icon purpl" />
                </div>
                <p className="para">24*7 Support</p>
            </div>
        </div>
    );
}

export default Highlight;
