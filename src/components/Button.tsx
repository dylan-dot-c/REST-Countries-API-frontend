import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const navigate = useNavigate();
function Button() {
  return (
    <button
      className='dark:bg-dk-dark-blue flex gap-2 items-center my-6 mb-6 border-lg rounded shadow-md px-4 py-1 shadow-black dark:text-lt-light-gray'
      onClick={() => {
        navigate("/");
      }}>
      <span>
        <BsArrowLeft />
      </span>
      Back
    </button>
  );
}

export default Button;
