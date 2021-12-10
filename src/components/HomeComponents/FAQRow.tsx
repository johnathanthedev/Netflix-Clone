import { Container, Row, Col } from "react-bootstrap";
import EmailInput from "../shared/netflix/EmailInput";
import Faq from "./Faq";
import netflixJson from "../../data/netflix/main.json";

const FAQRow = (): JSX.Element => {
  const testeroo = ["content1", "content2"];
  const copyArr = netflixJson.copywrite.homepage.faq;
  return (
    <Container fluid style={{ backgroundColor: "#000000" }}>
      <Row>
        <Col
          className="d-flex flex-column justify-content-center my-5 py-5"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            minHeight: "750px",
          }}
        >
          <h1 className="text-white text-large text-center">
            Frequently Asked Questions
          </h1>
          <div
            id="FAQContainer"
            style={{ maxWidth: "750px", width: "100%", margin: "0 auto" }}
          >
            <Faq title={copyArr[0]["title"]} content={copyArr[0].content} />
            <Faq title={copyArr[1]["title"]} content={copyArr[1].content} />
            <Faq title={copyArr[2]["title"]} content={copyArr[2].content} />
            <Faq title={copyArr[3]["title"]} content={copyArr[3].content} />
            <Faq title={copyArr[4]["title"]} content={copyArr[4].content} />
            <Faq title={copyArr[5]["title"]} content={copyArr[5].content} />
          </div>
          <div className="pt-5" style={{ width: "555px", margin: "0 auto" }}>
            <EmailInput />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQRow;
