import Tv from "../shared/netflix/Tv";
import Devices from "../shared/netflix/Devices";
import Phone from "../shared/netflix/Phone";
import Kids from "../shared/netflix/Kids";

const HomeMedia = (props) => {
  const tv_copy_check = "TV",
    download_copy_check = "Download",
    everywhere_copy_check = "everywhere",
    kids_copy_check = "kids";
  const ConditonalMedia = () => {
    if (props.title.includes(tv_copy_check)) {
      return <Tv mediaURLs={props.mediaURLs} />;
    } else if (props.title.includes(download_copy_check)) {
      return <Phone mediaURLs={props.mediaURLs} />;
    } else if (props.title.includes(everywhere_copy_check)) {
      return <Devices mediaURLs={props.mediaURLs} />;
    } else if (props.title.includes(kids_copy_check)) {
      return <Kids mediaURLs={props.mediaURLs} />;
    } else {
      return <h1>Something here</h1>;
    }
  };

  return <ConditonalMedia />;
};

export default HomeMedia;
