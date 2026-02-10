"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="w-full bg-[#92487A] py-[140px] px-5 text-center"
    >
      <div className="max-w-[720px] mx-auto">
        <h2
          className={`
            text-[45px] font-bold text-[#f4f1e8] mb-6
            max-md:text-[34px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-100
          `}
        >
          Begin Your Healing Journey
        </h2>

        <p
          className={`
            text-[20px] leading-[1.7] text-[#f4f1e8] mb-[60px]
            max-md:text-[16px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-300
          `}
        >
          Therapy can be a space to slow down, reconnect with yourself, and move
          forward with greater clarity and balance. Whether you’re feeling
          overwhelmed, burned out, or ready for change, support is available in
          a way that feels safe and grounded.
        </p>

        <button
          className={`
            border border-[#f4f1e8]
            text-[#f4f1e8]
            px-10 py-4
            text-[12px] font-bold tracking-wide
            bg-transparent
            transition-all duration-300 ease-out
            hover:bg-[#f4f1e8] hover:text-black
            transform
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-500
          `}
        >
          BOOK A CONSULTATION →
        </button>
      </div>
    </section>
  );
}
