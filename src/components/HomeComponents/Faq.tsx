import { useState } from "react";
import { Container } from "react-bootstrap";
import plusIcon from "../../assets/images/plus.svg";
import timesIcon from "../../assets/images/x.svg";
interface FaqProps {
  title: string;
  content: string[];
}

const Faq = (props: FaqProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const FaqContent = (): JSX.Element => {
    return (
      <div className="py-3 mt-1" style={{ backgroundColor: "#303030" }}>
        {props.content.map((sentence, index) => {
          return (
            <div>
              <p
                key={index}
                className="sub-text-medium text-white"
                style={{ width: "95%", margin: "0 auto" }}
              >
                {sentence}
              </p>
              {props.content.length > 1 && <br />}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Container className="mb-2">
      <div
        className="py-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#303030" }}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="text-white sub-text-medium pl-3">{props.title}</span>
        <img
          src={plusIcon}
          alt="Expand"
          style={{ width: "30px", height: "30px" }}
          className="mr-3"
        />
      </div>
      {isActive ? <FaqContent /> : ""}
    </Container>
  );
};

export default Faq;
