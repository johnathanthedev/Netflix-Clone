import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ height: "350px", backgroundColor: "#000000" }}>
      <Row
        className="d-flex flex-row align-items-center"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "#757575",
          height: "350px",
        }}
      >
        <Col
          className=""
          style={{ maxWidth: "200px", height: "200px", margin: "0 auto" }}
        >
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </Col>
        <Col
          className=""
          style={{ maxWidth: "125px", height: "200px", margin: "0 auto" }}
        >
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </Col>
        <Col
          className=""
          style={{ maxWidth: "175px", height: "200px", margin: "0 auto" }}
        >
          <p>Account</p>
          <p>Redeem Gift Cards</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </Col>
        <Col
          className=""
          style={{ maxWidth: "175px", height: "200px", margin: "0 auto" }}
        >
          <p>Media Center</p>
          <p>Buy Gift Cards</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
