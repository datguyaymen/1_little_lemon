import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Specials />
        <Testimonials />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
