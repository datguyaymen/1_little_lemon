import Header from "./components/Header";
import About from "./components/About";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";

const Reservations = () => {
  return (
    <div>
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <About />
          <Footer />
        </div>
        <ButtonGradient />
      </>
    </div>
  );
};

export default Reservations;
