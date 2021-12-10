interface KidsProps {
  mediaURLs: string[];
}

const Kids = (props: KidsProps): JSX.Element => {
  const image = props.mediaURLs[0];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "500px" }}>
        <img src={image} alt="Kids" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Kids;
