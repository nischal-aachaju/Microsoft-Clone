
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LandingPageComponent from "./LandingPageComponent";



const LandingPage = () => {
    const slides = [
        {
            img: "/src/assets/images/Untitled design (1).png",
            tag: "Microsoft exclusive",
            title: "Start Microsoft 365 Premium",
            subtitle: "today for 50% off",
            tag_col: "bg-amber-400",
            desc:
                "For a limited time, save on cutting-edge AI, powerful apps, spacious cloud storage, and advanced security—all in one plan.",
            button: "Get offer",
            bg: "bg-linear-to-r from-[#F2EEE6] via-[#EBE2D0] to-[#E0CAB1]",

        },
        {
            img: "/src/assets/images/Untitled design (3).png",
            tag: "Windows 11",
            tag_col: "bg-blue-400",
            title: "Meet Copilot AI",
            subtitle: "Your everyday assistant",
            desc:
                "Boost productivity with AI-powered assistance built directly into Windows 11.",
            button: "Learn more",
            bg: "bg-linear-to-br from-[#B1D6FD] vai-[#FAFDFA] to-[#C8E8FB]"
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
                        <LandingPageComponent data={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default LandingPage