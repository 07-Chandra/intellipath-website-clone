import React from "react";
import "./Reviews.scss";


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

interface top {
    id: number;
    name: string;
    log: data;
    profileImg: data;
}

interface center {
    id: number;
    name: string;
    position: string;
    about: string;
    profileImg: data;
}
interface bottom {
    id: number;
    name: string;
    position: string;
    about: string;
    profileImg: data;
    icon: data;
}

interface reviewData {
    review: {
        id: number;
        title: string;
        val: string;
        rate: string;
        text: string;
        reviewTop: Array<top>;
        reviewCenter: Array<center>;
        reviewBottom: Array<bottom>;
        img: data;
    };
}
const Reviews: React.FC<reviewData> = ({ review }) => {
    const img = review ? review?.img?.data.attributes.url : "";

    const reviewTop = review ? review?.reviewTop : "";
    const reviewCenter = review ? review.reviewCenter : "";
    const reviewBottom = review ? review.reviewBottom : "";

    console.log("review ", review);

    return (
        <div className="review">
            <div className="review-container">
                <div className="header">
                    <div className="heading">
                        <span>{review.title}</span>
                    </div>

                    <div className="stars">
                        <span className="val">{review.val}</span>
                        <span
                            className="img"
                            style={{ backgroundImage: `url(${img})` }}
                        ></span>
                        <p className="rate">{review.rate}</p>
                    </div>
                </div>

                <div className="all-review-list">
                    {reviewTop
                        ? reviewTop?.map((user, id) => {
                              return (
                                  <div className="review-list" key={id}>
                                      <div className="image-wrapper">
                                          <img
                                              src={
                                                  user?.profileImg.data
                                                      .attributes.url
                                              }
                                              alt="review"
                                          />
                                      </div>
                                      <div className="name">
                                          <p className="para">{user.name}</p>
                                          <div className="icon-div">
                                              <img
                                                  className="icon"
                                                  src={
                                                      user?.log?.data.attributes
                                                          .url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <div className="all-user">
                    {reviewCenter
                        ? reviewCenter?.map((user, id) => {
                              return (
                                  <div className="user" key={id}>
                                      <div className="info-div">
                                          <div className="image-wrapper">
                                              <img
                                                  src={
                                                      user?.profileImg?.data
                                                          .attributes.url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <div className="info">
                                              <p className="para">
                                                  {user.name}
                                              </p>
                                              <p>{user.position}</p>
                                          </div>
                                      </div>
                                      <p>{user.about}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <h2 className="heading">{review.text}</h2>

                <div className="hiring-partners">
                    {reviewBottom
                        ? reviewBottom.map((user, id) => {
                              return (
                                  <div className="partners" key={id}>
                                      <div className="info-div">
                                          <div className="image-wrapper">
                                              <img
                                                  src={
                                                      user?.profileImg?.data
                                                          .attributes.url
                                                  }
                                              />
                                          </div>
                                          <div className="info">
                                              <p className="para">
                                                  {user.name}
                                              </p>
                                              <p>{user.position}</p>
                                              {/* <span className="img"></span> */}
                                          </div>

                                          <div className="image-wrapper">
                                              <img
                                                  src={
                                                      user?.icon?.data
                                                          .attributes.url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </div>
                                      <p>{user.about}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
