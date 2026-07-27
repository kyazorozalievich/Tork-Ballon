import scss from "./Map.module.scss";
import map from "../../assets/images/contact/map.png";
import Image from "next/image";

const Map = () => {
  return (
    <div
      className={scss.Map}
      onClick={() =>
        window.open(
          "https://www.google.com/maps/place/Avrupa+Sanayi+Sitesi/@41.2850418,27.9507751,16.84z/data=!4m6!3m5!1s0x14b527be5d4d75a7:0x42cafc0281d22d4e!8m2!3d41.2855908!4d27.9505394!16s%2Fg%2F11hbpxm6bs?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
        )
      }
    >
      <Image src={map} alt="map" />
    </div>
  );
};

export default Map;
