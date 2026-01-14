
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import JoinNow1 from "./JoinNow1";

import card1 from "/src/assets/images/Card-Horizontal-AI-Project-Sparrow.avif"
import card2 from  "/src/assets/images/Content-Card-AI-Hour-Of-AI-The-First-Night-1.avif"

const MarqueBox = () => {
    const slides = [
        {
            img: card1 ,
            title: "Unlock AI learning with Hour of AI",
            desc: "Hour of AI: The First Night introduces learners of all ages to coding with a fun, immersive tutorial.",
            button: "Learn more",


        },
        {
            img:card2 ,
            title: "Protecting biodiversity with AIMeet Copilot AI",
            desc: "Microsoft’s AI for Good Lab created Project SPARROW to observe wildlife in remote locations.",
            button: "Learn more",

        },
    ];



    return (

        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,          // 3 seconds
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <JoinNow1 title={slide.title} img={slide.img} desc={slide.desc} button={slide.button} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MarqueBox
