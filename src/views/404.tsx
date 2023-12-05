import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft as Left } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Link to="/" className="absolute cursor-pointer top-4 left-4">
        <div className="flex items-center gap-1 text-white">
          <Left size={32} />
          <span>take me home</span>
        </div>
      </Link>
      <span className="text-2xl">Error 404 :(</span>
    </div>
  );
};

export default ErrorPage;
