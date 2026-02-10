"use client";

import React, { useEffect, useRef } from "react";

const OfficeSection = () => {
  const refs = useRef<(HTMLDivElement | HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-neutral-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          ref={(el) => (refs.current[0] = el)}
          className="font-lilac text-center mb-10 fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            A Calm Space to Feel Supported
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Therapy sessions are offered in a quiet, private Santa Monica office
            designed to help you feel grounded and at ease. Natural light,
            comfortable seating, and a peaceful environment create space for
            reflection, safety, and meaningful conversation.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {["/office1.jpg", "/office2.jpg", "/office3.jpg"].map(
            (src, i) => (
              <img
                key={i}
                ref={(el) => (refs.current[i + 1] = el)}
                src={src}
                alt="Therapy office"
                className="rounded-xl shadow-md object-cover w-full h-64 fade-up"
                style={{ transitionDelay: `${i * 0.15}s` }}
              />
            )
          )}
        </div>

        {/* Footer */}
        <div
          ref={(el) => (refs.current[4] = el)}
          className="font-lilac text-center fade-up"
        >
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Whether meeting in person or through secure telehealth, the goal is
            to provide a supportive setting where you can slow down, speak
            openly, and feel fully respected throughout your therapy journey.
          </p>

          <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            BOOK YOUR VISIT
          </button>
        </div>

      </div>
    </section>
  );
};

export default OfficeSection;
