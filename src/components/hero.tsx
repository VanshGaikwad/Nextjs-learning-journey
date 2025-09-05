import React from "react";
import CompImage from "public/computer_image.jpg";
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src={CompImage}
          fill={true}
          alt="Comp image"
          // width={500}
          // height={500}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950"></div>
      </div>
      <div className="flex items-center justify-center pt-64">
        <h1 className="font-bold text-4xl text-white">Professional Software engineer</h1>
      </div>
    </div>
  );
};

export default HeroPage;
