import React from "react";
import "./Points.scss";

type point = {
    name: string;
};

const Points: React.FC<point> = ({ name }) => {
    return (
        <div className="points">
            <div className="icon-part">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-filled"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                        strokeWidth="0"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
            <p className="para">{name}</p>

            <div className="icon-part">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-down arrow"
                    // className="icon arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 9l6 6l6 -6"></path>
                </svg>
            </div>
        </div>
    );
};

export default Points;
