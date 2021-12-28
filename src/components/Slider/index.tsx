import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { Slide } from "./Slide";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      loop
    >
      <SwiperSlide>
        <Slide
          image="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          title="Europa"
          subtitle="O continente mais antigo."
          href="/continent"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image="https://images.unsplash.com/photo-1610307766999-01f45d259959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          title="África"
          subtitle="A maior diversidade cultural do planeta."
          href="/continent"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image="https://images.unsplash.com/photo-1607606823587-85c1bbd76c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          title="América"
          subtitle="O continente das Américas."
          href="/continent"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image="https://images.unsplash.com/photo-1528800223624-764941bb49db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          title="Oceania"
          subtitle="O continente das ilhas."
          href="/continent"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image="https://images.unsplash.com/photo-1532236395709-7d70320fec2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          title="Ásia"
          subtitle="O mais dos continentes."
          href="/continent"
        />
      </SwiperSlide>
    </Swiper>
  );
}
