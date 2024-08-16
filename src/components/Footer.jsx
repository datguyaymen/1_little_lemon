import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { restaurant } from "../assets";

const Footer = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 100,
      smooth: true,
      offset: -50,
      spy: true,
    });
  };

  return (
    <section id="footer">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10  justify-center m-6">
        <img
          src={restaurant}
          height={277}
          width={175}
          className="rounded-sm overflow-hidden sm:block object-cover hidden "
          alt="restaurant"
        />

        <div>
          <h3 className=" h4 text-color-1">Doormat Navigation</h3>
          <ul>
            {location !== "reservations" ? (
              <>
                <li>
                  <ScrollLink
                    className=" cursor-pointer"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className=" cursor-pointer"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className=" cursor-pointer"
                    to="specials"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={100}
                  >
                    Menu
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink to="/reservations">Reservations</RouterLink>
                </li>
                <li>
                  <ScrollLink
                    className=" cursor-pointer"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    Login
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => goToPageAndScroll("home")}>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => goToPageAndScroll("about")}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => goToPageAndScroll("specials")}>
                    Menu
                  </button>
                </li>
                <li>
                  <RouterLink to="/reservations">Reservations</RouterLink>
                </li>
                <li>
                  <button onClick={() => goToPageAndScroll("home")}>
                    Login
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h3 className="h4 text-color-1">Contact</h3>
          <p>Adress</p>
          <p>Phone number</p>
          <p>email</p>
        </div>
        <div>
          <h3 className="h4 text-color-1">Socila Media</h3>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>TikTok</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
