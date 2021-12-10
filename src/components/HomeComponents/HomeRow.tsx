import { Container, Row, Col } from "react-bootstrap";
import HomeMedia from "./HomeMedia";

interface HomeRowProps {
  title: string;
  sub: string;
  mediaURLs: string[];
  isEven: boolean;
}

const HomeRow = (props: HomeRowProps): JSX.Element => {
  const EvensContainer = (): JSX.Element => {
    return (
      <Container fluid style={{ height: "400px", backgroundColor: "#000000" }}>
        <Row>
          <Col
            className="d-flex flex-row-reverse justify-content-around"
            style={{ maxWidth: "900px", height: "400px", margin: "0 auto" }}
          >
            <div
              className="text-white d-flex justify-content-center align-itens-center flex-column"
              style={{ width: "400px", height: "300px", alignSelf: "center" }}
            >
              <h1>{props.title}</h1>
              <p>{props.sub}</p>
            </div>
            <HomeMedia title={props.title} mediaURLs={props.mediaURLs} />
          </Col>
        </Row>
      </Container>
    );
  };

  const OddsContainer = (): JSX.Element => {
    return (
      <Container fluid style={{ height: "400px", backgroundColor: "#000000" }}>
        <Row>
          <Col
            className="d-flex"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div
              className="text-white d-flex justify-content-center align-itens-center flex-column"
              style={{ width: "350px", height: "300px", alignSelf: "center" }}
            >
              <h1>{props.title}</h1>
              <p>{props.sub}</p>
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
