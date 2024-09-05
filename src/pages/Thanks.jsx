import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Thanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <div className="p-10  flex flex-col gap-7 sm:gap-3 sm:bg-white sm:rounded-3xl sm:w-[500px] sm:h-[450px] ">
      <img
        className=" h-32 w-32 sm:w-11 sm:h-11  "
        src="icon-success.svg"
        alt="Success Icon"
      />
      <h1 className="sm:text-6xl text-2xl font-extrabold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to  <span className="font-bold">{email}.</span> <br />
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={()=> navigate("/")} className="w-full h-14 rounded-lg text-white font-bold bg-[#222642] mt-5 hover:opacity-85">
        
        Dismiss message
      </button>
    </div>
  );
};

export default Thanks;
