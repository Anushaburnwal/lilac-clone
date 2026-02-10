"use client";

import { DM_Sans } from "next/font/google";
import { useReveal } from "@/hooks/useReveal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="
        flex flex-col md:flex-row
        h-fit mx-4 md:mx-7
        pt-24 md:pt-32
        items-center
      "
    >
      {/* IMAGE */}
      <div
        className={`
          w-full md:w-1/3
          max-w-[260px] md:max-w-none
          rounded-t-full overflow-hidden
          mb-8 md:mb-0
          transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <img
          src="/hero.jpg"
          alt="Hero"
          className="
            w-full
            h-[320px] md:h-[95%]
            object-cover
            transition-transform duration-700 hover:scale-105
          "
        />
      </div>

      {/* TEXT */}
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <div
          className="
            w-full md:w-7/12
            flex flex-col
            items-center md:items-start
            text-center md:text-left
          "
        >
          {/* HEADING */}
          <h1
            className={`
              text-[34px] md:text-[60px]
              font-semibold leading-[1.1]
              text-black mb-6
              ${dmSans.className}
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-16"}
            `}
          >
            Anxiety & Trauma Therapy for Adults in Santa Monica
          </h1>

          {/* PARAGRAPH */}
          <p
            className={`
              text-black text-[16px] md:text-[20px]
              mb-8
              ml-0 md:ml-8
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-16"}
            `}
          >
            Supporting high-achieving adults who feel overwhelmed,
            stuck in overthinking, or emotionally exhausted.
          </p>

          {/* BUTTON */}
          <button
            className={`
              inline-flex items-center justify-center
              border border-black text-black
              text-[14px] md:text-[15px]
              px-6 md:px-8 py-3
              ml-0 md:ml-24
              hover:bg-black hover:text-white
              transition-all duration-700
              ${show ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-16"}
            `}
          >
            SCHEDULE A CONSULTATION →
          </button>
        </div>
      </div>
    </section>
  );
}
