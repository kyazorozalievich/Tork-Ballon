"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import england from "../../assets/images/header/flag-England.webp";
import germany from "../../assets/images/header/flag-Germany.png";
import france from "../../assets/images/header/flag-France.png";
import italy from "../../assets/images/header/flag-Italy.webp";
import arabic from "../../assets/images/header/flag-Arabic.png";
import spain from "../../assets/images/header/flag-Spain.png";
import logo from "../../assets/images/logo.png";
import { MdOutlineMail } from "react-icons/md";
import { RiMenu3Fill, RiWhatsappFill, RiWhatsappLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [languageCLick, setlanguageClick] = useState(false);
  const [languageBurger, setLanguageBurger] = useState(false);
  const [modalCLick, setModalClick] = useState(false);
  const [modalBurger, setModalBurger] = useState(false);
  const [burger, setBurger] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  setTimeout(() => {
    if (modalCLick) {
      setModalClick(false);
    }
    if (languageCLick) {
      setlanguageClick(false);
    }
  }, 1000);

  const products = [
    {
      title: "LPG cylinder vending machine.",
      href: "/products/filling",
    },
    {
      title: "Gas filling station",
      href: "/products/station",
    },
  ];

  const countries = [
    {
      icon: england,
      title: "English",
    },
    {
      icon: germany,
      title: "Germany",
    },
    {
      icon: france,
      title: "France",
    },
    {
      icon: italy,
      title: "Italy",
    },
    {
      icon: arabic,
      title: "Arabic",
    },
    {
      icon: spain,
      title: "Spain",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (burger) setBurger(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [burger]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burger &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setBurger(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [burger]);

  return (
    <>
      <header className={scss.Header}>
        <div className="container">
          <div className={scss.content}>
            <span onClick={() => router.push("/")}>
              <Image src={logo} alt="" className={scss.logo} />
            </span>
            <div className={scss.nav}>
              <Link
                href="/"
                className={pathname === "/" ? scss.active : scss.link}
              >
                Home
              </Link>
              <div className={scss.product}>
                <a
                  className={
                    pathname === "/products/filling"
                      ? scss.active
                      : pathname === "/products/station"
                        ? scss.active
                        : pathname === "/products/marking"
                          ? scss.active
                          : scss.link
                  }
                >
                  Products <FaAngleDown />
                </a>
                {!modalCLick && (
                  <div className={scss.modal}>
                    {products?.map((item, index) => (
                      <Link
                        href={item.href}
                        key={index}
                        onClick={() => setModalClick(true)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={pathname === "/about" ? scss.active : scss.link}
              >
                About
              </Link>
              <Link
                href="/reference"
                className={pathname === "/reference" ? scss.active : scss.link}
              >
                Reference
              </Link>
              <Link
                href="/contact"
                className={pathname === "/contact" ? scss.active : scss.link}
              >
                Contact
              </Link>
              {/* <div className={scss.translation}>
                <button>
                  <TbWorld />
                  Language
                  <FaAngleDown />
                </button>
                {!languageCLick && (
                  <div className={scss.languagesModal}>
                    {countries.map((el, idx) => (
                      <div
                        className={scss.country}
                        key={idx}
                        onClick={() => setlanguageClick(true)}
                      >
                        <Image src={el.icon} alt="" width={20} height={10} />
                        <h4>{el.title}</h4>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
            </div>
            <div className={scss.burgerMenu}>
              <button onClick={() => setBurger(true)}>
                <RiMenu3Fill />
              </button>
              {burger && (
                <div className={scss.burgerBlock}>
                  <Link
                    href="/"
                    className={pathname === "/" ? scss.active : scss.link}
                    onClick={() => setBurger(false)}
                  >
                    Home
                  </Link>
                  <div className={scss.product}>
                    <a
                      className={scss.link}
                      onClick={() => setModalBurger(!modalBurger)}
                    >
                      Products <FaAngleDown />
                    </a>
                    {!modalBurger && (
                      <div className={scss.modal}>
                        {products?.map((item, index) => (
                          <Link
                            href={item.href}
                            key={index}
                            onClick={() => {
                              (setModalBurger(true), setBurger(false));
                            }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/about"
                    className={pathname === "/about" ? scss.active : scss.link}
                    onClick={() => setBurger(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/reference"
                    className={
                      pathname === "/reference" ? scss.active : scss.link
                    }
                    onClick={() => setBurger(false)}
                  >
                    Reference
                  </Link>
                  <Link
                    href="/contact"
                    className={
                      pathname === "/contact" ? scss.active : scss.link
                    }
                    onClick={() => setBurger(false)}
                  >
                    Contact
                  </Link>
                  {/* <div className={scss.translation}>
                    <button onClick={() => setLanguageBurger(!languageBurger)}>
                      <span>
                        <TbWorld />
                      </span>
                      Language
                      <FaAngleDown />
                    </button>
                    {!languageBurger && (
                      <div className={scss.languagesModal}>
                        {countries.map((el, idx) => (
                          <div
                            className={scss.country}
                            key={idx}
                            onClick={() => {
                              (setlanguageClick(true), setBurger(false));
                            }}
                          >
                            <Image
                              src={el.icon}
                              alt=""
                              width={20}
                              height={10}
                            />
                            <h4>{el.title}</h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div> */}
                  <button onClick={() => setBurger(false)}>
                    Close <IoClose />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className={scss.target}>
        <div className={scss.icons}>
          <a
            className={scss.whatsapp}
            onClick={() => window.open("https://wa.me/905324681341")}
          >
            <RiWhatsappFill />
          </a>
          <a
            className={scss.email}
            onClick={() => window.open("mailto:tork@torkas.com")}
          >
            <MdOutlineMail />
          </a>
        </div>
      </div>
      <div className={scss.contactList}>
        <Link
          href="https://www.google.com/maps/place/Avrupa+Sanayi+Sitesi/@41.2850418,27.9507751,16.84z/data=!4m6!3m5!1s0x14b527be5d4d75a7:0x42cafc0281d22d4e!8m2!3d41.2855908!4d27.9505394!16s%2Fg%2F11hbpxm6bs?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <GrMapLocation />
        </Link>
        <Link href="https://wa.me/905324681341" target="_blank">
          <RiWhatsappLine />
        </Link>
        <Link href="tel:+902822555500" target="_blank">
          <LuPhone />
        </Link>
        <Link href="mailto:tork@torkas.com" target="_blank">
          <MdOutlineMail />
        </Link>
      </div>
    </>
  );
};

export default Header;
