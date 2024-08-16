import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  NavLink as RouterLink,
} from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { logo } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";

import Button from "./Button";
import { HamburgerMenu } from "./design/Navbar";

import * as Scroll from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
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

  const [openNavigation, setopenNavigation] = useState(false);

  const toogleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-2 lg:bg-n-1/90 lg:backdrop-blur-sm 
    ${openNavigation ? "bg-n-1" : "bg-n-1/90 backdrop-blur-sm "}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <ScrollLink
          className="block w-[12rem] xl:mr-8 cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={100}
        >
          <img src={logo} alt="logo" width={190} height={40} />
        </ScrollLink>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center my-5 lg:flex-row">
            <ul className="flex  items-center justify-center gap-8 ">
              {location !== "reservations" ? (
                <>
                  <li>
                    <ScrollLink
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
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
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
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
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
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
                    <RouterLink
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      to="/reservations"
                    >
                      Reservations
                    </RouterLink>
                  </li>
                  <li>
                    <ScrollLink
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
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
                    <button
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      onClick={() => goToPageAndScroll("home")}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      onClick={() => goToPageAndScroll("about")}
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      onClick={() => goToPageAndScroll("specials")}
                    >
                      Menu
                    </button>
                  </li>
                  <li>
                    <RouterLink
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      to="/reservations"
                    >
                      Reservations
                    </RouterLink>
                  </li>
                  <li>
                    <button
                      className=" cursor-pointer button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
                      onClick={() => goToPageAndScroll("home")}
                    >
                      Login
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <HamburgerMenu />
        </nav>
        <Link
          to="/"
          className="button hidden mr-8 text-n-8 font-sans text-sm  transition-colors hover:text-n-8/50 lg:block"
        >
          new account
        </Link>
        <Button
          className="hidden lg:flex text-n-8 font-sans text-sm transition-colors hover:text-n-8/50 "
          href="/"
        >
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toogleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
