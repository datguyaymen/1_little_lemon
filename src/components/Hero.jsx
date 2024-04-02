//import { heroimage } from "../assets";

import { useNavigate } from "react-router-dom";
import { heroimage } from "../assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="home" className="w-full pt-24 px-5 bg-color-1 z-1">
        <div className=" flex flex-row items-center justify-evenly h-[400px]">
          <div className="flex flex-col justify-center md:mx-5 ">
            <h1 className="font-markazi text-7xl lg:text-8xl text-color-2">
              Little Lemon
            </h1>
            <h2 className="h2  text-color-5">Chicago</h2>
            <p className="body-2 text-n-2 mt-4 lg:w-4/5 md:w-4/5">
              We are a family owned restaurant, focused on traditional recipes
              served with a modern twist.
            </p>
            <button
              className=" bg-color-2 text-n-7 font-bold text-2xl rounded-md w-1/2 lg:w-1/3 mt-4"
              onClick={() => {
                navigate("/reservations");
              }}
            >
              Reserve a table
            </button>
          </div>

          <img
            src={heroimage}
            width={300}
            height={400}
            className=" hidden sm:block z-2 object-contain overflow-hidden rounded-3xl md:mr-5"
            alt="hero-image"
          />
        </div>
      </section>
      <section className="h-10"></section>
    </>
  );
};

export default Hero;
