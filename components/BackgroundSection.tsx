"use client";

import { useState } from "react";
import styles from "./BackgroundSection.module.css";

const sections = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content: "Answer goes here.",
  },
  {
    title: "Certifications",
    content: "Answer goes here.",
  },
];

export default function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>My Professional Background</h2>

      {sections.map((item, index) => (
        <div key={index} className={styles.row}>
          <div
            className={styles.rowHeader}
            onClick={() => toggle(index)}
          >
            <h3>{item.title}</h3>
            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          <div
            className={`${styles.content} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
