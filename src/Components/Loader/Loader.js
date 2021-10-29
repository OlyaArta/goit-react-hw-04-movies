import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Spinner() {
  //other logic

  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
  );
}
