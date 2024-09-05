import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setError(false);
      navigate('/thanks' , { state: { email } }) 
      console.log("Email is valid, submit form");
    } else {
      setError(true);
      console.log("Invalid email");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:[90vw] lg:w-[900px] sm:bg-white sm:h-[600px] sm:rounded-[40px]">
      <img
        className="block w-full sm:hidden"
        src="/illustration-sign-up-mobile.svg"
        alt="sign-up-mobile"
      />
      <div className="p-6 sm:ml-6 sm:flex-1 sm:mt-10">
        <h1 className="text-4xl font-bold"> Stay updated!</h1>
        <p className="mt-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 mt-6 items-center">
            <img className="w-8 h-8" src="icon-success.svg" alt="" />
            <p className="font-semibold">
              Product discovery and building what matters
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img className="w-8 h-8" src="icon-success.svg" alt="" />
            <p className="font-semibold">
              {" "}
              Measuring to ensure updates are a success
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img className="w-8 h-8" src="icon-success.svg" alt="" />
            <p className="font-semibold"> And much more!</p>
          </div>
        </div>

        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="mb-1 flex justify-between ">
            <span className="font-bold">Email address</span>
            {error && (
              <span className="text-red-400 text-sm">valid email required</span>
            )}
          </div>
          <input
            className={`rounded-md w-full border-2 p-3 h-14 
    ${
      error
        ? "bg-red-200 border-red-500 focus:border-red-500"
        : "border-gray-300 focus:border-blue-500"
    }`}
            type="text"
            placeholder="email@company.com"
            value={email}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full h-14 rounded-lg text-white font-bold bg-[#222642] mt-5 hover:opacity-85"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img
        className="hidden md:inline  md:flex-1 md:object-fit md:h-[96%] md:top-3 md:right-3 md:relative "
        src="/illustration-sign-up-desktop.svg"
        alt="sign-up-desktop"
      />
    </div>
  );
};

export default NewsLetter;
