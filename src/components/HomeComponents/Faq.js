import { useState } from "react";
import { Container } from "react-bootstrap";
import plusIcon from "../../assets/images/plus.svg";
import timesIcon from "../../assets/images/x.svg";
import { motion, AnimatePresence } from "framer-motion";

const Faq = (props) => {
  const [isActive, setIsActive] = useState(false);
  const FaqContent = () => {
    return (
      <div className="py-3 mt-1" style={{ backgroundColor: "#303030" }}>
        <AnimatePresence initial={true}>
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
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
          </motion.section>
        </AnimatePresence>
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
          src={!isActive ? plusIcon : timesIcon}
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
