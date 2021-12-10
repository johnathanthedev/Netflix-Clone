import View from "../../interfaces/main/view";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import React from "react";
import HorizontalLine from "../HomeComponents/HorizontalLine";
import HomeRow from "../HomeComponents/HomeRow";
import strangerThingsPhoneImage from "../../assets/other/netflix/stranger-things-phone.jpg";
import strangerThingsBoxshot from "../../assets/other/netflix/stranger-things-boxshot.png";
import devicesImage from "../../assets/other/netflix/devices-image.png";
import strangerThingsVideo from "../../assets/other/netflix/stranger-things-video.m4v";
import kidsThemeImage from "../../assets/other/netflix/kids-theme-pic.png";
import strangerThingsDevicesAndVideo from "../../assets/other/netflix/stranger-things-devices-and-video.mp4";
import tvVideo from "../../assets/other/netflix/tv-video.mp4";
import FAQRow from "../HomeComponents/FAQRow";
import EmailInput from "../shared/netflix/EmailInput";

const Home: React.FunctionComponent<View> = () => {
  return (
    <Container fluid className="homepage">
      <div className="main-section">
        <h1 className="d-block text-center">
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h5 className="d-block text-white text-center">
          Watch anywhere. Cancel anytime.
        </h5>
        <div className="email-submission">
          <p className="text-white text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <EmailInput />
        </div>
      </div>
      <HorizontalLine />
      <HomeRow
        title="Enjoy on your TV."
        sub="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        mediaURLs={[tvVideo]}
        isEven={false}
      />
      <HorizontalLine />
      <HomeRow
        title="Download your shows to watch offline."
        sub="Save your favorites easily and always have something to watch."
        mediaURLs={[strangerThingsBoxshot, strangerThingsPhoneImage]}
        isEven={true}
      />
      <HorizontalLine />
      <HomeRow
        title="Watch everywhere."
        sub="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        mediaURLs={[strangerThingsDevicesAndVideo]}
        isEven={false}
      />
      <HorizontalLine />
      <HomeRow
        title="Create profiles for kids."
        sub="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        mediaURLs={[kidsThemeImage]}
        isEven={true}
      />
      <HorizontalLine />
      <FAQRow />
      <HorizontalLine />
    </Container>
  );
};

export default Home;
