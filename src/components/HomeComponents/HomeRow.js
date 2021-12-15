import { Container, Row, Col } from "react-bootstrap";
import HomeMedia from "./HomeMedia";

const HomeRow = (props) => {
  const EvensContainer = () => {
    return (
      <Container fluid style={{ height: "450px", backgroundColor: "#000000" }}>
        <Row>
          <Col
            className="d-flex flex-row-reverse justify-content-between"
            style={{ maxWidth: "1100px", height: "400px", margin: "0 auto" }}
          >
            <div
              className="text-white d-flex justify-content-center align-itens-center flex-column"
              style={{ width: "500px", height: "300px", alignSelf: "center" }}
            >
              <h1 className="text-large">{props.title}</h1>
              <p className="sub-text-medium">{props.sub}</p>
            </div>
            <HomeMedia title={props.title} mediaURLs={props.mediaURLs} />
          </Col>
        </Row>
      </Container>
    );
  };

  const OddsContainer = () => {
    return (
      <Container fluid style={{ height: "450px", backgroundColor: "#000000" }}>
        <Row>
          <Col
            className="d-flex justify-content-between"
            style={{ maxWidth: "1100px", margin: "0 auto" }}
          >
            <div
              className="text-white d-flex justify-content-center align-itens-center flex-column"
              style={{ width: "500px", height: "450px", alignSelf: "center" }}
            >
              <h1 className="text-large">{props.title}</h1>
              <p className="sub-text-medium">{props.sub}</p>
            </div>
            <HomeMedia title={props.title} mediaURLs={props.mediaURLs} />
          </Col>
        </Row>
      </Container>
    );
  };

  if (props.isEven) {
    return <EvensContainer />;
  } else {
    return <OddsContainer />;
  }
};

export default HomeRow;
