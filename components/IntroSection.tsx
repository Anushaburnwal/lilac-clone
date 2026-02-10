"use client";

import { useReveal } from "@/hooks/useReveal";

export default function IntroSection() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="
        grid grid-cols-2 items-center
        bg-[#F9DFDF]
        px-[120px] pr-[80px] py-[120px]
        relative
        max-[900px]:grid-cols-1
        max-[900px]:px-10 max-[900px]:py-20
      "
    >
      {/* LEFT TEXT */}
      <div className="max-w-[620px] mb-10">
        <h2
          className={`
            text-[54px] font-bold text-black mb-8
            max-[900px]:text-[38px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-100
          `}
        >
          Hi, I’m Maya Reynold's.
        </h2>

        <p
          className={`
            text-[20px] leading-[1.7] text-black mb-10
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-300
          `}
        >
          I’m a licensed clinical psychologist based in Santa Monica, helping
          adults navigate anxiety, trauma, and burnout in a supportive and
          grounded environment. Many of the people I work with appear capable on
          the outside while quietly feeling overwhelmed, tense, or emotionally
          exhausted.
        </p>

        <div
          className={`
            w-full flex justify-center
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-500
          `}
        >
          <button
            className="
              border border-black bg-transparent
              px-[26px] py-[14px]
              text-[13px] tracking-wide text-black
              transition-all duration-300 ease-out
              hover:bg-black hover:text-white
            "
          >
            TALK WITH DR. MAYA →
          </button>
        </div>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative flex justify-center max-[900px]:mt-16">
        {/* Tall rounded image */}
        <div
          className={`
            w-[430px] h-[690px]
            overflow-hidden
            rounded-t-[200px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-700
          `}
        >
          <img
            src="/intro-main.jpg"
            alt="Lilac flowers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating circle */}
        <div
          className={`
            absolute bottom-[-60px] right-0
            w-[300px] h-[300px]
            rounded-full overflow-hidden bg-white
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-900
          `}
        >
          <img
            src="/intro-circle.jpg"
            alt="Flowers close up"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
