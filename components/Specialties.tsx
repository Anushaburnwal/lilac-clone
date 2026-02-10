"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Specialties() {
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      className="
        bg-[#FFFDF1]
        px-6 md:px-[60px]
        py-16 md:py-[100px]
      "
    >
      {/* Heading */}
      <h2
        className={`
          text-center
          text-[36px] md:text-[52px]
          font-semibold text-black
          mb-12 md:mb-[50px]
          transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        Therapy Services
      </h2>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1 md:grid-cols-3
        gap-8 md:gap-5
      ">
        {/* CARD TEMPLATE */}
        {[
          {
            title: "Anxiety & Panic Therapy",
            text: "Helping adults manage anxiety, panic, and chronic overthinking in a calm, structured way. Together we explore patterns behind worry and tension while building tools to regulate mind and body.",
            img: "/special1.jpg",
          },
          {
            title: "Trauma Therapy (EMDR + CBT)",
            text: "Healing past experiences through paced, evidence-based trauma therapy focused on safety and stabilization. Sessions strengthen resilience and emotional regulation.",
            img: "/special2.jpg",
          },
          {
            title: "Burnout & High-Pressure Stress",
            text: "Supporting high-performing adults facing burnout and pressure. Therapy restores balance and builds sustainable success habits.",
            img: "/special3.jpg",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`
              border border-[#1f3b2c]
              bg-[#ACBAC4]
              p-6 md:p-10
              flex flex-col justify-between
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            <div>
              <h3 className="
                text-[18px] md:text-[19px]
                font-bold text-black mb-4
              ">
                {card.title}
              </h3>

              <p className="
                text-[14px] md:text-[13px]
                leading-relaxed text-black mb-6
              ">
                {card.text}
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <img
                src={card.img}
                alt={card.title}
                className="
                  w-[220px] h-[220px]
                  md:w-[290px] md:h-[290px]
                  rounded-full object-cover
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
