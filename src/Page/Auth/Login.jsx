import React from "react";
import MovieLogo from "../../../public/assets/logo.svg";
import useToggle from "../../Hooks/useToggle";
export default function Login() {
  const register = useToggle();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-darkBlue ">
      <div
        className="flex flex-col justify-evenly items-center h-full w-full md:justify-normal md:space-y-[5.2rem] md:mt-[4.5rem] 
      "
      >
        <img className="w-[2rem]" src={MovieLogo}></img>
        <div className="bg-semiDarkBlue w-[90%]  flex flex-col space-y-4 p-8 rounded-xl md:w-[52%] ] lg:w-[28%] ">
          <h1 className="">Login</h1>
          <input placeholder="Email Address"></input>
          <input placeholder="Password"></input>
          {register.isToggle && <input placeholder="Repeat Password"></input>}
          <button>
            {register.isToggle ? "Create an account" : "Login to your account"}
          </button>
          <div className="flex items-center justify-center">
            <p className="paragraph-m-thin">Don't have an account?</p>
            <button onClick={register.changeToggle} className="sign-up-button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
