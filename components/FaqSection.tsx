"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  { question: "What is Dr. Maya’s therapy approach like?", answer: "Dr. Maya takes a warm, collaborative, and evidence-based approach to therapy. She integrates methods such as cognitive-behavioral therapy, EMDR, mindfulness, and body-oriented techniques to address both emotional and physical stress. Sessions are paced thoughtfully to create safety, insight, and lasting change." },
  { question: "Are sessions available in person or online?", answer: "Therapy sessions are offered in person at Dr. Maya’s Santa Monica office as well as through secure telehealth for clients located in California. Both options provide a private, supportive environment tailored to your comfort and needs." },
  { question: "What are the fees for therapy sessions?", answer: "Session fees vary depending on the type and length of service. During an initial consultation, we discuss your needs, availability, and any practical details so you feel clear and comfortable before beginning therapy. My goal is to provide transparent information and a supportive process from the start." },
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
