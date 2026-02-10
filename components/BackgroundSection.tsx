"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const data = [
  {
    title: "Education",
    content:
      "I earned my Doctorate in Clinical Psychology (PsyD) with advanced training in anxiety, trauma-informed care, and evidence-based therapeutic approaches. My education emphasized understanding both the emotional and physiological impact of stress, allowing me to support clients with practical tools and depth-oriented insight.",
  },
  {
    title: "Licensure",
    content:
      "I am a licensed clinical psychologist practicing in California, providing therapy for adults navigating anxiety, trauma, and burnout. My work follows ethical, evidence-based standards while prioritizing safety, collaboration, and individualized care.",
  },
  {
    title: "Certifications",
    content:
      "I integrate specialized training in cognitive-behavioral therapy (CBT), EMDR, mindfulness-based techniques, and body-oriented approaches. These certifications allow me to address trauma, stress, and emotional regulation in a structured yet compassionate way.",
  },
];

export default function BackgroundSection() {
  const { ref, show } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="bg-[#E7E4DB] py-20 px-6 max-[800px]:py-16"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2
          className={`
            text-4xl font-semibold text-black text-center mb-12
            max-[800px]:text-[32px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-100
          `}
        >
          My Professional Credentials
        </h2>

        {/* Accordion */}
        {data.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                border-t border-black
                transform transition-all duration-700 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                ${index === 0 ? "delay-300" : index === 1 ? "delay-500" : "delay-700"}
              `}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex justify-between items-center py-6 text-left cursor-pointer"
              >
                <h3 className="text-xl md:text-2xl text-black">
                  {item.title}
                </h3>

                <span
                  className={`
                    text-2xl text-black
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${isOpen ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-black leading-relaxed text-[20px] ml-10 md:ml-20 pb-6">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}

        {/* bottom divider */}
        <div className="border-t border-black" />
      </div>
    </section>
  );
}
