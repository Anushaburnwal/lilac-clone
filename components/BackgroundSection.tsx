"use client";

import { useState } from "react";

const data = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

export default function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-lilac bg-[#E7E4DB] py-20 px-6">

      {/* container width */}
      <div className="max-w-3xl mx-auto">

        {/* heading */}
        <h2 className="text-4xl md:text-4xl font-semibold text-black text-center mb-12">
          My Professional Background
        </h2>

        {/* accordion */}
        {data.map((item, index) => (
          <div key={index} className="border-t border-black">

            {/* header */}
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

            {/* content */}
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

        {/* bottom divider */}
        <div className="border-t border-green-900/40" />

      </div>
    </section>
  );
}
