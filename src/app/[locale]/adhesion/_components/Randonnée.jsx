"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import whatsapp from "../../../../../public/images/whatsapp.png";
import { image } from "@nextui-org/react";

function Randonnée() {
  const t = useTranslations("randonnée");
  const { locale } = useParams();
  let randonées = [];
  for (let i = 1; i <= 4; i++) {
    randonées.push({
      place: t(`${i}.place`),
      image: t(`${i}.image`),
    });
  }

  return (
    <>
      {/* Right component */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl text-bgSecondary font-bold">RANDONNÉE</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {randonées.map((ran) => (
            // <Link href="https://wa.me/+212668962299" target="_blank">
            <div className="rounded-lg relative block bg-black">
              <img
                alt={ran.place}
                src={`/images/${ran.image}.jfif`}
                className="absolute inset-0 h-full w-full rounded-lg  object-fill opacity-75"
              />
              <div className="relative min-h-full p-4 sm:p-6 lg:p-8 rounded-lg">
                <h3 className="text-lg uppercase tracking-widest font-semibold text-[#f8d006]">
                  {ran.place}
                </h3>
                <div className="mt-32 flex justify-center sm:mt-48 lg:mt-52 ">
                  <Link
                    className="flex justify-center items-center gap-3 bg-[#fff] group border-[1px] border-[solid] border-[#25d366] p-[5px] relative w-[12em] h-[2.5em] [transition:0.5s] text-[17px] rounded-[0.4em] hover:bg-[#25d366] hover:[transition:0.5s]"
                    href={`https://wa.me/+212668962299`}
                    target="_blank"
                  >
                    <p className="text-center left-16 p-0 [transition:0.5s] text-[#25d366] group-hover:left-[0.5em] group-hover:text-[#fff]">
                      {t("button")}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      // class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                      className="group-hover:fill-[#fff] fill-[#25d366]"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Randonnée;
