const Devices = (props) => {
  const video = props.mediaURLs[0];
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <video autoPlay loop muted style={{ width: "500px", height: "500px" }}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Devices;
