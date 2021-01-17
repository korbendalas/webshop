import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { onSaleProducts } from "@app/services/endpoints/products";
import { ProductCard } from "@app/components/product/productCard";
import { useTimeout } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Controller, Lazy, Navigation, Pagination } from "swiper";

export const OnSale = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, Controller, Lazy]);
  const { data, isLoading } = useQuery("onSaleProducts", onSaleProducts);

  const [isReady] = useTimeout(900);
  const [newSwiper, setSwiper] = useState(null);

  useEffect(() => {
    const timer = setTimeout(function () {
      newSwiper.update();
      newSwiper?.updateSlides();
      newSwiper?.autoplay?.stop();
      newSwiper?.autoplay?.start();
    }, 1500);
    return () => clearTimeout(timer);
  }, [newSwiper]);

  console.log("data sale", data);
  return (
    <div className="overflow-hidden flex ">
      {data?.data?.length && isReady() ? (
        <Swiper
          grabCursor={true}
          // slidesPerGroup={1}
          className="swiper-container-h  py-10 px-5"
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={5}
          // loopedSlides={data?.data.length}
          onImagesReady={swiper => {
            setSwiper(swiper);
          }}
          onInit={swiper => {
            setSwiper(swiper);
          }}
          onUpdate={swiper => {
            setSwiper(swiper);
          }}
          // loop={true}
        >
          {data?.data?.map(item => (
            <SwiperSlide style={{ width: "auto" }} key={item._id} className="inline-block ">
              <ProductCard img={item?.img} salePrice={item?.salePrice} price={item?.price} id={item?._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "spinner"
      )}
    </div>
  );
};
