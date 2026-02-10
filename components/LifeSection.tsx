"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./LifeSection.module.css";

export default function LifeSection() {
   const { ref, visible } = useReveal();
  return (
    <section className="mt-10 bg-[#d9d5cc] flex">

      {/* LEFT TEXT */}
      <div className="font-lilac flex flex-col w-1/2">

        <div className="px-20 pt-30">

          <h2
            className={`text-5xl font-semibold text-[#1f3b2c] mb-9 
            ${styles.fadeUp} ${styles.delay1}`}
          >
            When Life Looks Fine — But Doesn’t Feel That Way Inside
          </h2>

          <p
            className={`text-[#1f3b2c] text-xl mb-4 
            ${styles.fadeUp} ${styles.delay2}`}
          >
            Many of the adults I work with appear capable, driven, and successful on the outside — yet internally feel overwhelmed, tense, or emotionally drained. 
           </p>
          <p
            className={`text-[#1f3b2c] text-xl 
            ${styles.fadeUp} ${styles.delay3}`}
          >
           You may be managing responsibilities, meeting expectations, and showing up for others, while quietly carrying a constant sense of pressure or worry.
          </p>

        </div>

        <div className="mt-auto w-full">
          <button
            className={`${styles.button} 
            ${styles.fadeUp} ${styles.delay4}`}
          >
            TAKE THE FIRST STEP →
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div
        className={`w-1/2 
        ${styles.fadeUp} ${styles.delay2}`}
      >
        <img src="/about.jpg" alt="Lifestyle" />
      </div>

    </section>
  );
}
