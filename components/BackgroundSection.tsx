"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-lilac bg-[#E7E4DB] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        {/* heading */}
        <h2 className="text-4xl font-semibold text-black text-center mb-12 fade-up">
          My Professional Credentials
        </h2>

        {/* accordion */}
        {data.map((item, index) => (
          <div
            key={index}
            className="border-t border-black fade-up"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >

            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-6 text-left"
            >
              <h3 className="text-xl md:text-2xl text-black">
                {item.title}
              </h3>

              <span className="text-2xl text-black">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-w-xl ml-10 md:ml-24 text-xl pb-6 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-black leading-relaxed">
                {item.content}
              </p>
            </div>

          </div>
        ))}

        <div className="border-t border-black" />

      </div>

    </section>
  );
}
