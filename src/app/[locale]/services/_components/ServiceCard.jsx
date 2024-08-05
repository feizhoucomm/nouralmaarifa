import Image from "next/image";
import React from "react";

function ServiceCard({ title, imgSrc }) {
  return (
    <>
      <div className="group relative w-[300px] h-[200px] bg-[linear-gradient(-45deg,_#14b0cf_0%,_#a5d895_100%_)] rounded-[10px] flex items-center justify-center overflow-hidden [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)] hover:-rotate-[5deg] hover:scale-110 hover:[box-shadow:0_10px_20px_rgba(0,_0,_0,_0.2)]">
        <div className="w-full h-full">
          <div className="scroll absolute z-20 top-32 left-32 bg-cyan-400 group-hover:invisible "></div>
          <Image
            src={imgSrc}
            width={300}
            height={200}
            className="w-full h-full group-hover:-rotate-45 [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)] "
          />
        </div>

        <div className="flex justify-center items-center group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-hover:opacity-100 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-[20px] box-border bg-[#fff] opacity-0 [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)]">
          <p className={`text-lg m-0 text-gray-600 font-bold text-center`}>
            {title}.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
