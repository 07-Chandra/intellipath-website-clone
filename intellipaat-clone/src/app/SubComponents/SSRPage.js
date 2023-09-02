import React from "react";

const SSRPage = ({ data }) => {
    return (
        <div>
            <h1>Server-Side Rendering Example</h1>
            <p>Static Data: {data}</p>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: "Static Value",
        },
    };
}

export default SSRPage;
