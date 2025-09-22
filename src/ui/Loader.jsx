import { ThreeDots } from "react-loader-spinner";

function Loader({ height = "80", width = "80" }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="rgb(var(--color-primary-900))"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center"
    />
  );
}

export default Loader;
