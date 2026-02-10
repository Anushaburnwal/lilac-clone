"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    question: "What is Dr. Maya’s therapy approach like?",
    answer:
      "Dr. Maya takes a warm, collaborative, and evidence-based approach to therapy. She integrates methods such as cognitive-behavioral therapy, EMDR, mindfulness, and body-oriented techniques to address both emotional and physical stress. Sessions are paced thoughtfully to create safety, insight, and lasting change.",
  },
  {
    question: "Are sessions available in person or online?",
    answer:
      "Therapy sessions are offered in person at Dr. Maya’s Santa Monica office as well as through secure telehealth for clients located in California. Both options provide a private, supportive environment tailored to your comfort and needs.",
  },
  {
    question: "What are the fees for therapy sessions?",
    answer:
      "Session fees vary depending on the type and length of service. During an initial consultation, we discuss your needs, availability, and any practical details so you feel clear and comfortable before beginning therapy. My goal is to provide transparent information and a supportive process from the start.",
  },
];

export default function FaqSection() {
  const { ref, show } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="
        grid grid-cols-[1fr_1.2fr]
        gap-[60px]
        bg-[#FFF2EB]
        px-[80px] py-[120px]
        max-[900px]:grid-cols-1
        max-[900px]:px-10 max-[900px]:py-20
      "
    >
      {/* LEFT IMAGE */}
      <div
        className={`
          w-[470px] h-[690px] overflow-hidden
          rounded-t-[240px]
          ml-[80px]
          max-[900px]:ml-0 max-[900px]:w-full
          transform transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          delay-100
        `}
      >
        <img
          src="/faq.jpg"
          alt="FAQ visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FAQ */}
      <div className="flex flex-col mt-[120px] max-[900px]:mt-16">
        <h2
          className={`
            text-[52px] font-bold text-black
            border-b border-black pb-2 mb-8
            max-[900px]:text-[36px]
            transform transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            delay-300
          `}
        >
          FAQs
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                border-b border-black py-3
                transform transition-all duration-700 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
              style={undefined}
            >
              {/* QUESTION */}
              <div
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex items-center cursor-pointer"
              >
                <span
                  className={`
                    w-10 text-[28px] text-black text-center
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `}
                >
                  {isOpen ? "−" : "+"}
                </span>
                <h3 className="text-[32px] font-bold text-black max-[900px]:text-[20px]">
                  {faq.question}
                </h3>
              </div>

              {/* ANSWER */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${isOpen ? "max-h-[140px]" : "max-h-0"}
                `}
              >
                <p className="mt-3 text-[16px] text-black max-w-[520px] ml-0">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
