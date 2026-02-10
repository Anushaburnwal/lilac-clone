"use client";

import { useReveal } from "@/hooks/useReveal";

export default function LifeSection() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="
        mt-10
        flex flex-col md:flex-row
        bg-[#d9d5cc]
      "
    >
      {/* LEFT TEXT */}
      <div className="
        flex flex-col
        w-full md:w-1/2
        bg-[#C8AAAA]
      ">
        <div className="
          px-6 py-12
          md:px-20 md:pt-32
        ">
          <h2
            className={`
              text-[30px] md:text-5xl
              font-semibold text-black mb-8
              leading-tight
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            When Life Looks Fine — But Doesn’t Feel That Way Inside
          </h2>

          <p
            className={`
              text-black text-[16px] md:text-xl
              mb-4 leading-relaxed
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            Many of the adults I work with appear capable, driven, and successful
            on the outside — yet internally feel overwhelmed, tense, or emotionally drained.
          </p>

          <p
            className={`
              text-black text-[16px] md:text-xl
              leading-relaxed
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            You may be managing responsibilities, meeting expectations, and
            showing up for others, while quietly carrying a constant sense of pressure or worry.
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-auto w-full">
          <button
            className={`
              w-full border-t border-black
              py-4 text-[14px] md:text-[16px]
              bg-transparent text-black
              hover:bg-black hover:text-white
              transition-all duration-300 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            TAKE THE FIRST STEP →
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className={`
          w-full md:w-1/2
          h-[300px] md:h-auto
          overflow-hidden
          transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <img
          src="/about.jpg"
          alt="Lifestyle"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
