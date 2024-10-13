'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        }
      }
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="w-full max-w-4xl text-center flex flex-col gap-12 items-center">
        <p className="text-7xl font-bold text-center text-transparent bg-clip-text bg-black drop-shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
          The N Word
        </p>
        <Image
                src="/main.jpeg"
                alt="Main"
                className="rounded border border-neutral-400 hover:border-black"
                width={700}
                height={400}
              />

        <div className="border-b-4 border-gray-300 w-full pb-8">
          <div className="flex justify-center space-x-6 items-center">
            <a href="https://x.com/N_words_sol" title="Visit X" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/X.jpg"
                alt="X"
                className="rounded-full border-4 border-neutral-400 hover:border-black"
                width={60}
                height={60}
              />
            </a>
            <a href="https://dexscreener.com/" title="Visit Dexscreener" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/DEX.jpg"
                alt="Dexscreener"
                className="rounded-full border-4 border-neutral-400 hover:border-black"
                width={60}
                height={60}
              />
            </a>
            <a href="https://t.me/+IDm0W7Wm4B8xNWM0" title="Visit Telegram" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/TG.jpg"
                alt="Telegram"
                className="rounded-full border-4 border-neutral-400 hover:border-black"
                width={60}
                height={60}
              />
            </a>
          </div>
        </div>
        <div className="w-full mt-8">
          {mounted && (
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="px-2">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        
      </main>
      <style jsx global>{`
        .slick-prev:before,
        .slick-next:before {
          color: black !important;
        }
      `}</style>
    </div>
  );
}
