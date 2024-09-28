import React, { useState } from "react";
import HeaderHome from "../../Header/HeaderHome";
import hero from "../../../Assests/hero.webp";

export default function Body() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <HeaderHome />
      <div>
        <img className=" w-[100vw] h-[100vh]" src={hero} alt="bg-img" />
      </div>
      <div
        className="absolute top-0 left-0  w-full h-full"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
        }}
      ></div>
      <div className="  absolute top-36 flex my-36 left-0 right-0 flex-col  items-center justify-center mx-auto">
        <div className="text-white text-6xl font-medium">
          Unlimited Movies,<span>TV shows and more</span>
        </div>
        <div className="font-light text-white m-2 text-xl">
          Watch anywhere.Cancel anytime.
        </div>
        <div className="font-light text-white text-xl">
          Ready to watch? Enter your email to create or restart your membership
        </div>
        <div className="mt-5 flex items-center justify-center w-[40%]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            className="bg-transparent border p-3 w-full text-white"
          />
            <button className="text-white bg-red-700 p-3 border w-[30%] font-medium hover:bg-transparent hover:text-white duration-500">Get Started <i class="fa-solid fa-arrow-right"></i></button>

        </div>
      </div>
    </div>
  );
}
