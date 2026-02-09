"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  { question: "Do you take insurance?", answer: "Answer goes here." },
  { question: "What are your rates?", answer: "Answer goes here." },
  { question: "Do you have any openings?", answer: "Answer goes here." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>

      {/* LEFT IMAGE */}
      <div className={`${styles.imageWrap} ${styles.fadeUp} ${styles.delay1}`}>
        <img src="/faq.jpg" alt="FAQ visual" />
      </div>

      {/* RIGHT FAQ */}
      <div className={styles.faqWrap}>

        <h2 className={`${styles.title} ${styles.fadeUp} ${styles.delay2}`}>
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${styles.fadeUp}`}
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
          >
            <div
              className={styles.questionRow}
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`${styles.icon} ${
                  openIndex === index ? styles.openIcon : ""
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>

              <h3>{faq.question}</h3>
            </div>

            <div
              className={`${styles.answer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
