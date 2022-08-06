import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../../pages/services/serviceTv.scss";

export default function index() {
  // const itemList1 = ["Live-Stream Services: Increase viewership & followers",
  //     "Customized Videos",
  //     "Create Short Videos from Sermons",
  //     "Personalized Shorts"]

  // const itemList2 =["Live-Stream Services: Increase viewership & followers",
  //     "Customized Videos",
  //     "Create Short Videos from Sermons",
  //     "Done-for-you pictures",
  //     "Personalized Reels",
  //     "Instagram Stories"]

  //     const itemList3 =["Live-Stream Services: Increase viewership & followers",
  //     "Customized Videos",
  //     "Create Short Videos from Sermons",
  //     "Done-for-you pictures",
  //     "Personalized Reels",
  //     "Facebook Stories"]

  //     const itemList4 =["Google advertising",
  //     "Facebook advertising",
  //     "Customized Videos",
  //     "Youtube advertising"]

  return (
    <>
      <div
        class="section-tv scrollbar popup"
        style={{ backgroundColor: "black !impotent" }}
        id="tv-services"
      >
     

        <div class="container-fluid align-center-tv">
          <div class="row">
            <div class="col-sm-4 tv-1">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>ROKU App</h1>
                </div>
                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div className="tvLogo-align">
                  <div class="tv-service-logo">
                    <img
                      src={require("../../assets/images/tv-section/Roku-tv.png")}
                    ></img>
                  </div>
                </div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 tv-2">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>Android TV</h1>
                </div>

                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div class="tv-service-logo">
                  <img
                    src={require("../../assets/images/tv-section/android tv.png")}
                  ></img>
                </div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 tv-3">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>Apple TV</h1>
                </div>
                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div class="tv-service-logo">
                  <img
                    src={require("../../assets/images/tv-section/Artboard–2.png")}
                  ></img>
                </div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 tv-4">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>Fire TV</h1>
                </div>
                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div class="tv-service-logo">
                  <img
                    src={require("../../assets/images/tv-section/fire tv.png")}
                  ></img>
                </div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 tv-5">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>iOS & android</h1>
                </div>
                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div className="tvLogo-align">
                <div class="tv-service-logo ">
                  <img
                    src={require("../../assets/images/tv-section/Artboard–2.png")}
                  ></img>
                </div>
                <div class="tv-service-logo ">
                  <img
                    src={require("../../assets/images/tv-section/android phone.png")}
                  ></img>
                </div></div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 tv-6">
              <div class="tv-service-content">
                <div class="tv-service-name">
                  <h1>CMN TV</h1>
                </div>
                <div class="underline-tv-head"></div>
                <div class="tv-service-details">
                  <p>
                    Your channel packaged into an app in the App Store. With one
                    touch, your audience can access your Live, Streaming, and
                    VOD archived content along with notifications and more...
                  </p>
                </div>
                <div class="tv-service-logo">
                  <img
                    src={require("../../assets/images/tv-section/Artboard – 3.png")}
                  ></img>
                </div>
                <div class="tv-text-button">
                  <div class="tv-button-content">
                    <h3>Learn More</h3>
                  </div>
                  <div class="tv-button-icon">
                    <img
                      src={require("../../assets/images/tv-section/button-icon.png")}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
