const Tv = (props) => {
  const video = props.mediaURLs[0];
  return (
    <div style={{ width: "500px", height: "450px" }}>
      <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Tv;
