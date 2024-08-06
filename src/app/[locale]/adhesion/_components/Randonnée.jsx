"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

function Randonnée() {
  const t = useTranslations("randonnée");
  const { locale } = useParams();
  let randonées = [];
  for (let i = 1; i <= 4; i++) {
    randonées.push({
      place: t(`${i}.place`),
      price: t(`${i}.price`),
    });
  }

  return (
    <>
      {/* Right component */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl text-bgSecondary font-bold mb-4">RANDONNÉE</h2>
        <div className="grid grid-cols-2 gap-4">
          {randonées.map((ran) => (
            <Link
              href="https://wa.me/+212668962299"
              className="group rounded-lg relative block bg-black"
              target="_blank"
            >
              <img
                alt=""
                src="/images/bensliman.jpg"
                className="absolute inset-0 h-full w-full rounded-lg  object-fill opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 rounded-lg">
                <h3 className="text-lg uppercase tracking-widest font-semibold text-[#f8d006]">
                  {ran.place}
                </h3>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {ran.price}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <h1 className="text-gray-50 text-xl font-bold">
                      {t("button")}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Randonnée;
