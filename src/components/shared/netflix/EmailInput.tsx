import { Button, FormControl, InputGroup } from "react-bootstrap";

const EmailInput = (): JSX.Element => {
  return (
    <div className="email-submission">
      <p className="text-white text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Email address"
          aria-label="Email address"
          style={{ height: "60px", width: "375px" }}
        />
        <Button className="bg-red">
          <span className="text-medium px-3">Get Started</span>
        </Button>
      </InputGroup>
    </div>
  );
};

export default EmailInput;
