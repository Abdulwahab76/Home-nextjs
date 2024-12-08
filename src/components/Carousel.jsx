"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust import to your button component

export default function Carousel() {
  const slides = [
    {
      id: 1,
      image: "https://kajcon.com/assets/fe/images/slide-bg-1.jpg",
      title: (
        <>
          <span className="text-primary-blue">
            Professional, cost-effective
          </span>{" "}
          approach <br /> to human resources management
        </>
      ),
      description: (
        <>
          <span>
            KAJ Consultancy Services provides end to end HR Solutions across a
          </span>
          <br /> wide spectrum of industry verticals and levels.
        </>
      ),
      link: "/about-us",
    },
    {
      id: 2,
      image: "https://kajcon.com/assets/fe/images/slide-bg-2.jpg",
      title: (
        <>
          <span className="text-primary-blue">Efficient, modern solutions</span>{" "}
          tailored to <br /> your business needs
        </>
      ),
      description: (
        <>
        <span>
        We empower businesses by offering customized HR services and 
        </span>
        <br />
        consulting that drive growth and success.
        </>
      ),
       
      link: "/services",
    },
    {
      id: 3,
      image: "https://kajcon.com/assets/fe/images/slide-bg-3.jpg",
      title: (
        <>
          <span className="text-primary-blue">Unlock potential</span> with
          <br /> our professional HR services
        </>
      ),
      description:
        "Our experienced team delivers actionable insights and strategies to help organizations excel.",
      link: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
            className={`w-full flex-shrink-0 relative   h-screen bg-no-repeat bg-cover`}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
              <div className="text-center text-white px-4 md:px-8">
                <h2 className="text-4xl text-left mb-4 font-medium uppercase leading-snug">
                  {slide.title}
                </h2>
                <p className="text-lg mb-6 text-left">{slide.description}</p>
                <Link href={slide.link} className="flex justify-start">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute h-10 w-10 left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        &#10094;
      </button>
      <button
        className="absolute  h-10 w-10  right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        &#10095;
      </button>
    </div>
  );
}
