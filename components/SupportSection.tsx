"use client";

import { useReveal } from "@/hooks/useReveal";

export default function SupportSection() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="grid grid-cols-2 min-h-[120vh] max-[900px]:grid-cols-1"
    >
      {/* LEFT IMAGE */}
      <div
        className={`
          overflow-hidden
          transform transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          delay-100
        `}
      >
        <img
          src="/support.jpg"
          alt="Support"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col bg-[#FFE4EF]">
        <div className="px-14 max-[900px]:px-10">
          <h2
            className={`
              text-[52px] font-bold text-black mb-10 mt-[180px]
              max-[900px]:text-[36px]
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-300
            `}
          >
            You Deserve Support Through This
          </h2>

          <p
            className={`
              text-[20px] text-black mb-10
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-500
            `}
          >
            You may benefit from therapy if you’re experiencing:
          </p>

          <ul
            className={`
              list-disc pl-6 space-y-3 mb-8
              text-[18px] text-black
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-700
            `}
          >
            <li className="ml-5">
              Constant worry or overthinking that feels hard to quiet
            </li>
            <li className="ml-5">
              Physical tension, restlessness, or difficulty relaxing
            </li>
            <li className="ml-5">
              Emotional exhaustion or professional burnout
            </li>
            <li className="ml-5">
              Lingering stress from past experiences
            </li>
            <li className="ml-5">
              Feeling functional on the outside but overwhelmed inside
            </li>
          </ul>

          <p
            className={`
              text-[20px] text-black mt-10 mb-auto
              transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              delay-900
            `}
          >
            With empathy, structure, and thoughtful guidance, we work together
            to create safety, clarity, and lasting emotional balance — at a pace
            that feels supportive and sustainable.
          </p>
        </div>

        {/* CTA */}
        <button
          className={`
            w-full border-t border-black
            text-[16px] tracking-wide
            py-[22px] mt-auto
            bg-transparent text-black
            transition-all duration-300 ease-out
            hover:bg-black hover:text-white hover:pl-8
            transform
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-700
          `}
        >
          GET SUPPORT →
        </button>
      </div>
    </section>
  );
}
