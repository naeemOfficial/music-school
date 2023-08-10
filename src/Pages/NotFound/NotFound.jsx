import img from "../../assets/images/error.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={img} alt="vector" className="mb-4 w-1/2 h-1/2" />
    </div>
  );
};

export default NotFound;
