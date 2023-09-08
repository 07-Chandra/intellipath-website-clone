import React from "react";
import "./Mentors.scss";
import Interested from "@/app/SubComponents/Interested/Interested.tsx";

interface imgAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: null | any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
}

interface data {
    data: {
        id: number;
        attributes: imgAttributes;
    };
}

interface arraySchema {
    id: number;
    name: string;
    position: string;
    about: string;
    img: data;
}

interface mentorsData {
    mentors: Array<arraySchema>;
}
const Mentors: React.FC<mentorsData> = ({ mentors }) => {
    // console.log("mentors", mentors);

    let first: arraySchema | undefined =
        mentors && mentors.length > 0 ? mentors[0] : undefined;
    let second: arraySchema | undefined =
        mentors && mentors.length > 1 ? mentors[1] : undefined;

    return (
        <div className="mentors">
            <div className="mentors-container">
                <div className="header">
                    <h2 className="heading">
                        Meet Your <span>Mentors</span>
                    </h2>
                </div>

                <div className="all-info">
                    <div className="info">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src={first?.img?.data?.attributes.url}
                                    alt="human"
                                />
                            </div>
                            <p className="para">{first?.name}</p>
                            <p>{first?.position}</p>
                            <p>{first?.about}</p>
                        </div>
                    </div>
                    <div className="info second">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src={second?.img?.data?.attributes.url}
                                    alt="human"
                                />
                            </div>
                            <p className="para">{second?.name}</p>
                            <p>{second?.position}</p>
                            <p>{second?.about}</p>
                        </div>
                    </div>
                    <div className="info third">
                        {mentors
                            ? mentors?.map((user, id) => (
                                  <div className="name" key={id}>
                                      <div className="image-wrapper">
                                          <img
                                              src={
                                                  user?.img?.data.attributes.url
                                              }
                                              alt="human"
                                          />
                                      </div>
                                      <p className="para">{user.name}</p>
                                      <p>{user.position}</p>
                                      <p>{user.about}</p>
                                  </div>
                              ))
                            : ""}
                    </div>
                </div>

                <div className="intrest-program">
                    <Interested />
                </div>
            </div>
        </div>
    );
};

export default Mentors;
