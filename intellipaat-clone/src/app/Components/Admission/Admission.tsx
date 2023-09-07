import React from "react";
import "./Admission.scss";

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

interface featuresItem {
    id: number;
    text: string;
    img: data;
}

interface cardSchema {
    id: number;
    name: string;
    position: string;
    about: string;
    profileImg: data;
}

interface admissionData {
    data: {
        id: number;
        title: string;
        desc: string;
        programName: string;
        adFees: string;
        costFees: string;
        adPrice: string;
        costPrice: string;
        partner: string;
        fPartner: string;
        parternBottom: string;
        upDeadline: string;
        date: string;
        aboutDeadline: string;
        img: data;
        cards: Array<cardSchema>;
    };
}

const Admission: React.FC<admissionData> = ({ data }) => {
    const cardsData = data ? data?.cards : "";

    // console.log("admission data", data);

    return (
        <div className="admission">
            <div className="admission-container">
                <div className="header">
                    <h2 className="heading">{data?.title}</h2>
                    <p>{data?.desc}</p>
                </div>

                <div className="all-application">
                    {cardsData
                        ? cardsData?.map((item, id) => {
                              return (
                                  <div className="application " key={id}>
                                      <div className="image-wrapper">
                                          <img
                                              src={
                                                  item?.profileImg?.data
                                                      .attributes.url
                                              }
                                              alt=""
                                          />
                                      </div>

                                      <h2 className="subheading">
                                          {item.name}
                                      </h2>

                                      <p>{item.about}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
            <div className="program">
                <div className="cover">
                    <h2 className="heading" style={{ alignSelf: "flex-start" }}>
                        <span>{data?.programName}</span>
                    </h2>

                    <div className="admission-fees">
                        <div className="item">
                            <div className="left-part">
                                <h2 className="subheading">{data?.adFees}</h2>

                                <p className="price">₹ {data?.adPrice}</p>
                            </div>

                            <button className="btn">Apply Now</button>
                        </div>

                        <div className="item">
                            <div className="left-part">
                                <h2 className="subheading">{data.costFees}</h2>

                                <p className="price">₹ {data?.costPrice}</p>
                            </div>

                            <div className="right-part">
                                <p>{data?.partner}</p>

                                <h2 className="subheading">{data?.fPartner}</h2>

                                <div className="image-wrapper">
                                    <img
                                        src={data?.img?.data.attributes.url}
                                        alt="company"
                                    />
                                </div>
                                <p className="color"> {data?.parternBottom}</p>
                            </div>
                            <div className="temp-part"></div>
                        </div>

                        <div className="item">
                            <div className="left">
                                <h2 className="subheading">
                                    {data?.upDeadline}
                                </h2>

                                <div className=" orange">{data?.date}</div>
                            </div>
                        </div>
                        <p className="bottom-para">{data?.aboutDeadline}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;
