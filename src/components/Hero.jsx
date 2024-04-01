//import { heroimage } from "../assets";

import { useNavigate } from "react-router-dom";
import { heroimage } from "../assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="home" className="w-full pt-24 px-5 bg-color-1 z-1">
        <div className=" flex flex-row items-center justify-evenly h-[400px]">
          <div className="flex flex-col justify-center">
            <h1 className="font-markazi text-8xl text-color-2">Little Lemon</h1>
            <h2 className="h2  text-color-5">Chicago</h2>
            <p className="body-2 text-n-2 mt-4 w-4/5 lg:px-5">
              We are a family owned restaurant, focused on traditional recipes
              served with a modern twist.
            </p>
            <button
              className=" bg-color-2 text-n-7 font-sans text-xl rounded-md w-1/3 mt-4"
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
            className=" hidden sm:block z-2 object-contain overflow-hidden rounded-3xl"
            alt="hero-image"
          />
        </div>
      </section>
      <section className="h-10"></section>
    </>

    // <div className="py-10 lg:py-16 xl:py-20 px-20 bg-color-1 grid lg:grid-cols-2">
    //   <div className="bg-n-13 max-w-[25rem] px-8 py-8">

    //   </div>
    //   <div className=" aspect-[33/40] "></div>
    // </div>
  );
};

export default Hero;
