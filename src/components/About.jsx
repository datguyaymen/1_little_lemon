import { about } from "../assets";

const About = () => {
  return (
    <section id="about" className=" py-12 px-10  bg-[#D6D8D7]">
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:w-[40%]">
          <h1 className=" h1 text-7xl text-color-3">Little Lemon</h1>
          <h2 className=" h2  pt-0">Chicago</h2>
          <p className=" body-2 lg:w-2/3 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia
            reprehenderit earum officiis dicta sequi tenetur ipsa quam,
            obcaecati facilis reiciendis pariatur quaerat quia quisquam cum, ad
            nam dolorem dolor.
          </p>
        </div>
        <img src={about} alt="about" />
      </div>
    </section>
    //m-12 lg:w-4/5 lg:translate-x-[10rem] lg:px-10
  );
};

export default About;
