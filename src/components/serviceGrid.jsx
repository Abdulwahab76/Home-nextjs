import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const ServicesGrid = () => {
  return (
    <div className="max-w-7xl px-20  mx-auto py-10">
      <div className="grid grid-cols-12 place-content-center place-items-center ">
        <div className="md:col-span-6    col-span-full *:text-sm *:text-gray-600 flex gap-y-5 flex-col">
          <Heading>Our Services</Heading>
          <p>
            KAJ offers an array of staffing and data conversion services. We
            have a decade <br /> of experience in man management and
            digitization.
          </p>
          <p>
            KAJ is a consulting partner to various MNC and government
            institutions <br /> providing them with staffing solutions and HR
            Services.
          </p>
          <p>
            We provide both traditional and tailor-made data entry services
            across all <br /> verticals. We have a highly satisfied clientele
            owing to our quality and delivery <br /> commitments
          </p>
        </div>
        <div className="card md:col-span-6 pt-5 col-span-full">
          <img
            className="w-full h-1/6 "
            src="https://kajcon.com/assets/fe/images/staffing.png"
            alt="Animated Card Hover Effect Html & CSS"
          />
          <div className="intro flex justify-center items-center flex-col">
            <h1 className="text-lg uppercase"> Staffing Solutions</h1>

            <p className="text-p !text-sm">Contractual & Permanent Staffing</p>
            <div className="flex gap-1 ">
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 py-20 place-content-center place-items-center">
      <div class="card md:col-span-3   col-span-full">
          <img
            className="w-full h-2/6 "
            src="https://kajcon.com/assets/fe/images/staffing.png"
            alt="Animated Card Hover Effect Html & CSS"
          />
          <div className="intro hover:!h-full flex justify-center items-center flex-col">
            <h1 class="text-lg uppercase"> Staffing Solutions</h1>

            <p class="text-p !text-sm">Contractual & Permanent Staffing</p>
            <div className="flex gap-1 ">
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="card md:col-span-3  col-span-full">
          <img
            className="w-full h-1/6 "
            src="https://kajcon.com/assets/fe/images/staffing.png"
            alt="Animated Card Hover Effect Html & CSS"
          />
          <div className="intro hover:!h-full  flex justify-center items-center flex-col">
            <h1 class="text-lg uppercase"> Staffing Solutions</h1>

            <p class="text-p !text-sm">Contractual & Permanent Staffing</p>
            <div className="flex gap-1 ">
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="card md:col-span-3  col-span-full">
          <img
            className="w-full h-1/6 "
            src="https://kajcon.com/assets/fe/images/staffing.png"
            alt="Animated Card Hover Effect Html & CSS"
          />
          <div className="intro hover:!h-full  flex justify-center items-center flex-col">
            <h1 className="text-lg uppercase"> Staffing Solutions</h1>

            <p className="text-p !text-sm">Contractual & Permanent Staffing</p>
            <div className="flex gap-1 ">
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="card md:col-span-3  col-span-full">
          <img
            className="w-full h-1/6 "
            src="https://kajcon.com/assets/fe/images/staffing.png"
            alt="Animated Card Hover Effect Html & CSS"
          />
          <div className="intro  hover:!h-full  flex justify-center items-center flex-col">
            <h1 className="text-lg uppercase"> Staffing Solutions</h1>

            <p className="text-p !text-sm">Contractual & Permanent Staffing</p>
            <div className="flex gap-1 ">
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
              <span className="h-10 w-10 bg-primary-blue rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
