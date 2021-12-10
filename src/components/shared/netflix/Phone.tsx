interface PhoneProps {
  mediaURLs: string[];
}

const Phone = (props: PhoneProps): JSX.Element => {
  const main_image = props.mediaURLs[1];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "225px" }}>
        <img src={main_image} alt="Phone" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Phone;