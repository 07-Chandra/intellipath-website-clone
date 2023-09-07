"use client";

import { useEffect, useState } from "react";
import Admission from "./Components/Admission/Admission.jsx";
import Cohort from "./Components/Cohort/Cohort.jsx";
import Course from "./Components/Course/Course.jsx";
import Curriculum from "./Components/Curriculum/Curriculum.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Mentors from "./Components/Mentors/Mentors.jsx";
import Program from "./Components/Program/Program.jsx";
import Project from "./Components/Project/Project.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import Services from "./Components/Services/Services.jsx";
import Transition from "./Components/Transition/Transition.jsx";
import Contact from "./SubComponents/Contact/Contact.jsx";
import { axiosClient } from "./Utils/axiosClient.js";
import axios from "axios";

function Home() {
    const [apiData, setApiData] = useState(null);

    async function fetchData() {
        try {
            const program = await axiosClient.get(
                // "/cloud-computings?populate[curriculam][populate]=module1,modules,highlightItem.img&populate[cohort][populate]=features,module1,table.img&populate[admission][populate]=img,cards.profileImg&populate[services][populate]=img,alumniImg,allInfo.img,buttons.img,peerImages.img&populate[hero][populate]=scoreImage,ratings.img&populate[Program][populate]=*&populate[Course][populate]=*&populate[mentors][populate]=*&populate[project][populate]=advancement.img,img?&populate[review][populate]=reviewTop.profileImg,reviewCenter.profileImg,reviewBottom.profileImg,img,reviewTop.log,reviewBottom.icon?&populate[transition][populate]=features.img,status.img,company.img,arrowImg,nextCompany.img,img"
                "http://localhost:1337/api/cloud-computings?populate[curriculam][populate]=module1,modules,highlightItem.img&populate[cohort][populate]=features,module1,table.img&populate[admission][populate]=img,cards.profileImg&populate[services][populate]=img,alumniImg,allInfo.img,buttons.img,peerImages.img&populate[hero][populate]=scoreImage,ratings.img&populate[Program][populate]=*&populate[Course][populate]=allRoles,applyRules,skills,img,allImages.img&populate[mentors][populate]=*&populate[project][populate]=advancement.img,img?&populate[review][populate]=reviewTop.profileImg,reviewCenter.profileImg,reviewBottom.profileImg,img,reviewTop.log,reviewBottom.icon?&populate[transition][populate]=features.img,status.img,company.img,arrowImg,nextCompany.img,img"
            );

            const programRes = await program?.data?.data;
            await setApiData(programRes);
        } catch (error) {
            console.error("Error fetching course data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log("apiData 2", apiData);
    }, [apiData]);

    const heroData = apiData ? apiData[0]?.attributes?.hero : "";

    // console.log("hero ", heroData);

    return (
        <main>
            <Hero props={apiData ? apiData[0]?.attributes?.hero : ""} />
            <Program data={apiData ? apiData[0]?.attributes?.Program : ""} />
            <Transition
                data={apiData ? apiData[0]?.attributes.transition : ""}
            />
            <Course course={apiData ? apiData[0]?.attributes.Course : ""} />
            <Mentors mentors={apiData ? apiData[0]?.attributes.mentors : ""} />
            <Curriculum
                data={apiData ? apiData[0]?.attributes.curriculam : ""}
            />
            <Project project={apiData ? apiData[0]?.attributes.project : ""} />
            <Reviews review={apiData ? apiData[0]?.attributes.review : ""} />
            <Services data={apiData ? apiData[0]?.attributes.services : ""} />
            <Admission data={apiData ? apiData[0]?.attributes.admission : ""} />
            <Cohort data={apiData ? apiData[0]?.attributes.cohort : ""} />
        </main>
    );
}

export default Home;
