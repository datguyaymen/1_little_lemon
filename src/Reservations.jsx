import Header from "./components/Header";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

const Reservations = () => {
  return (
    <div>
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Booking />
          <Footer />
        </div>
        <ButtonGradient />
      </>
    </div>
  );
};

export default Reservations;
