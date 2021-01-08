import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { onSaleProducts } from "@app/services/endpoints/products";
import { ProductCard } from "@app/components/homepage/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, Controller } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

export const OnSale = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const { data } = useQuery("onSaleProducts", onSaleProducts);

  useEffect(() => {
    setTimeout(() => {
      controlledSwiper?.update();
      console.log("update");
    }, 1000);
  }, []);
  return (
    <div className="overflow-hidden flex ">
      {data?.data.length && (
        <Swiper
          slidesPerGroup={4}
          id="on-sale"
          watchOverflow
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          className="swiper-container-h  py-10 px-5"
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={5}
          observer={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data?.data?.map(item => (
            <SwiperSlide style={{ width: "auto" }} key={item._id} className="inline-block ">
              <ProductCard
                img={item?.product?.img}
                salePrice={item?.salePrice}
                price={item?.product?.price}
                id={item?.product?._id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
