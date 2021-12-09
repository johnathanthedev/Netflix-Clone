import View from "../../interfaces/main/view";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import React from "react";

const Home: React.FunctionComponent<View> = (props) => {
  return (
    <Container fluid className="homepage">
      <div className="main-section">
        <h1 className="d-block text-center">
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h3 className="d-block text-white">Watch anywhere. Cancel anytime.</h3>
        <div className="email-submission">
          <p className="text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email address"
              aria-label="Email address"
              style={{ height: "50px" }}
            />
            <Button className="bg-red">Get Started</Button>
          </InputGroup>
        </div>
      </div>
      <div>
        <h3>Some text for tests</h3>
      </div>
    </Container>
  );
};

export default Home;
