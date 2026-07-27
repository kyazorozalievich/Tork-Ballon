"use client";
import Link from "next/link";
import scss from "./Footer.module.scss";
import { useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.tork}>
            <Image src={logo} alt="" />
            <p>
              Leading manufacturer of automatic machines for filling gas
              cylinders.
            </p>
            <div className={scss.icons}>
              <Link
                href="https://www.linkedin.com/company/torkascom/"
                target="_blank"
                className={scss.linkedin}
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://www.youtube.com/@torkascom"
                target="_blank"
                className={scss.youtube}
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.instagram.com/torkas_mekatronik?igsh=MWx1MnUzdnQ2OGltNQ%3D%3D&utm_source=qr"
                target="_blank"
                className={scss.instagram}
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className={scss.products}>
            <h6>Products</h6>
            <Link href="/products/filling">LPG cylinder vending machine.</Link>
            <Link href="/products/station">Gas filling station</Link>
          </div>
          <div className={scss.company}>
            <h6>Company</h6>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/reference">Reference</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={scss.contact}>
            <h6>Contact</h6>
            <Link href="https://www.google.com/maps/place/Avrupa+Sanayi+Sitesi/@41.2850418,27.9507751,16.84z/data=!4m6!3m5!1s0x14b527be5d4d75a7:0x42cafc0281d22d4e!8m2!3d41.2855908!4d27.9505394!16s%2Fg%2F11hbpxm6bs?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D">
              Address: Mimar Sinan Mah. 101. Cd. Avrupa Sanayi Sitesi No: D/1
              Kapakli, Tekirdag 59510 Turkiye
            </Link>
            <Link href="mailto:tork@torkas.com">email: tork@torkas.com</Link>
            <Link href="https://wa.me/905324681341">
              phone: +90 532 468 13 41
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={scss.footer}>
        <h6>Copyright © 2025 — TORK MECHATRONICS A.Ş. All Rights Reserved</h6>
      </div>
    </section>
  );
};

export default Footer;
