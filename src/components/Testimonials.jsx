import { judy, lisa, mark, mary } from "../assets";

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-10 bg-color-7">
      <div className="">
        <h1 className=" h1 text-n-7 flex justify-center mb-5">Testimonials</h1>
        <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center lg:justify-between gap-5 lg:mx-10 lg:w-[75%] lg:translate-x-[12rem] lg:px-10">
          <div className="max-w-[250px] rounded-xl overflow-hidden shadow-lg bg-n-1">
            <img
              className=" object-cover pointer-events-none"
              src={mark}
              alt="mark"
            />
            <p className="px-6 py-4 body-2 text-justify">
              This cozy restaurant has left the best impressions!
            </p>
          </div>
          <div className="max-w-[250px] rounded-xl overflow-hidden shadow-lg bg-n-1">
            <img
              className=" object-cover pointer-events-none"
              src={mary}
              alt="mary"
            />
            <p className="px-6 py-4 body-2 text-justify">
              It&apos;s a great experience. The ambiance is welcoming.
            </p>
          </div>
          <div className="max-w-[250px] rounded-xl overflow-hidden shadow-lg bg-n-1">
            <img
              className=" object-cover pointer-events-none"
              src={lisa}
              alt="lisa"
            />
            <p className="px-6 py-4 body-2">
              Do yourself a favor and visit this lovely restaurant.
            </p>
          </div>
          <div className="max-w-[250px] rounded-xl overflow-hidden shadow-lg bg-n-1">
            <img
              className=" object-cover pointer-events-none"
              src={judy}
              alt="judy"
            />
            <p className="px-6 py-4 body-2">
              The food is fantastic and the service is unmatched.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
