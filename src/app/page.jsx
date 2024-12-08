import Carousel from "@/components/Carousel";
import ServicesGrid from "@/components/serviceGrid";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" ">
      <Carousel />
      {/* Get in Touch section */}
      <div className="bg-[url('https://kajcon.com/assets/fe/images/bg-box.png')] py-20  ">
        <div className="max-w-7xl mx-auto px-20 gap-y-5 text-white flex-col md:flex-row  text-xl flex justify-around">
          <p>
            Dedicated Resourcing and BackOffice Process Management Services and
            Consultancy
          </p>
          <Button variant="touch" className='w-32'>Get in Touch</Button>
        </div>
      </div>

      {/* our services */}

      <ServicesGrid />
      {/* our services */}
    </div>
  );
}
