interface DevicesProps {
  mediaURLs: string[];
}

const Devices = (props: DevicesProps): JSX.Element => {
  const video = props.mediaURLs[0];
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <video autoPlay loop muted style={{ width: "400px", height: "400px" }}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Devices;
