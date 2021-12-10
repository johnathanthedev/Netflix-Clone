import { Container, Row, Col } from "react-bootstrap";

const Footer = (): JSX.Element => {
  return (
    <Container fluid style={{ height: "450px", backgroundColor: "#000000" }}>
      <Row>
        <Col>
          <h1>Footer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
