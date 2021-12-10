import { Container, Row, Col } from "react-bootstrap";
import EmailInput from "../shared/netflix/EmailInput";

const FAQRow = (): JSX.Element => {
  return (
    <Container fluid style={{ height: "400px", backgroundColor: "#000000" }}>
      <Row>
        <Col className="" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 className="text-white">Frequently Asked Questions</h1>
          <EmailInput />
        </Col>
      </Row>
    </Container>
  );
};

export default FAQRow;
