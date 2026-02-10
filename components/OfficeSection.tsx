"use client";

import { useReveal } from "@/hooks/useReveal";

export default function OfficeSection() {
  const { ref, show } = useReveal();

  return (
    <section className="w-full bg-[#DCC5B2] py-16 px-6 md:px-16">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div
          className={`
            text-center mb-10
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-100
          `}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            A Calm Space to Feel Supported
          </h2>

          <p className="mt-4 text-black max-w-2xl mx-auto">
            Therapy sessions are offered in a quiet, private Santa Monica office
            designed to help you feel grounded and at ease. Natural light,
            comfortable seating, and a peaceful environment create space for
            reflection, safety, and meaningful conversation.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Image 1 */}
          <img
            src="/office1.jpg"
            alt="Therapy office"
            className={`
              w-full h-64 object-cover shadow-md
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-300
            `}
          />

          {/* Image 2 */}
          <img
            src="/office2.jpg"
            alt="Therapy office"
            className={`
              w-full h-64 object-cover shadow-md
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-500
            `}
          />

          {/* Image 3 */}
          <img
            src="/office3.jpg"
            alt="Therapy office"
            className={`
              w-full h-64 object-cover shadow-md
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-700
            `}
          />
        </div>

        {/* Footer */}
        <div
          className={`
            text-center
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-900
          `}
        >
          <p className="text-black max-w-xl mx-auto mb-6">
            Whether meeting in person or through secure telehealth, the goal is
            to provide a supportive setting where you can slow down, speak
            openly, and feel fully respected throughout your therapy journey.
          </p>

          <button
            className="
              bg-black text-white px-8 py-3
              transition-all duration-300 ease-out
              hover:bg-gray-400
            "
          >
            BOOK YOUR VISIT
          </button>
        </div>
      </div>
    </section>
  );
}
