import { bruchetta, delivery, greeksalad } from "../assets";

const Specials = () => {
  return (
    <section
      id="#specials"
      className="m-10 lg:w-4/5 lg:translate-x-[10rem] lg:px-10 "
    >
      <div className=" flex flex-col md:flex-row lg:flex-row justify-between lg:mx-10 lg:px-10">
        <h1 className=" h1 text-n-7">This weeks Specials!</h1>
        <button className="bg-color-2 font-bold text-2xl w-1/2 md:w-1/5 lg:w-1/5 rounded-md  my-4">
          Online Menu
        </button>
      </div>
      <div className=" flex flex-col flex-wrap md:flex-row lg:flex-row items-center justify-center gap-5 lg:gap-12 lg:m-10 lg:p-10 my-5">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
          <img src={greeksalad} alt="greeksalad" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              <h5 className=" h5">Greek Salad</h5>
              <h5 className=" h5 text-color-3">$12.99</h5>
            </div>
            <p className="text-gray-700 text-base">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
          <div className=" flex justify-between font-bold text-xl mb-2 px-6">
            <h5 className=" h5 ">Oder a delivery </h5>
            <img src={delivery} width={40} height={40} alt="delivery" />
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img src={bruchetta} alt="bruchetta" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              <h5 className=" h5 ">Burchetta</h5>
              <h5 className=" h5 text-color-3">$5.99</h5>
            </div>
            <p className="text-gray-700 text-base">
              Our Bruchetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <br />
          </div>
          <div className=" flex justify-between font-bold text-xl mb-2 px-6">
            <h5 className=" h5 ">Oder a delivery </h5>
            <img src={delivery} width={40} height={40} alt="delivery" />
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img src={greeksalad} alt="greeksalad" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              <h5 className=" h5">Lemon Dessert</h5>
              <h5 className=" h5 text-color-3">$4.99</h5>
            </div>
            <p className="text-gray-700 text-base">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <br />
          </div>
          <div className=" flex justify-between font-bold text-xl mb-2 px-6">
            <h5 className=" h5 ">Oder a delivery </h5>
            <img src={delivery} width={40} height={40} alt="delivery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
