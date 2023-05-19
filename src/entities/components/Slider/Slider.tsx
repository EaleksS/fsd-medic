import { FC } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const Slider: FC = (): JSX.Element => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <img
          src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
          alt="img"
        />
      </SwiperSlide>
    </Swiper>
  );
};
