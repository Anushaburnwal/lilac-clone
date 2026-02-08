"use client";

import { useState } from "react";
import styles from "./BackgroundSection.module.css";

const data = [
  {
    title: "Education",
    content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

export default function BackgroundSection() {
  // 👇 IMPORTANT: default = null → everything closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        My Professional Background
      </h2>

      {data.map((item, index) => (
        <div key={index} className={styles.row}>
          <div
            className={styles.header}
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
