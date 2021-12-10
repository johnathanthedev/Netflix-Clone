import { Button, FormControl, InputGroup } from "react-bootstrap";

const EmailInput = (): JSX.Element => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Email address"
        aria-label="Email address"
        style={{ height: "50px" }}
      />
      <Button className="bg-red">Get Started</Button>
    </InputGroup>
  );
};

export default EmailInput;
