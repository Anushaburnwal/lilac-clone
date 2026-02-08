import styles from "./LifeSection.module.css";

export default function LifeSection() {
  return (
    <section className="mt-10 bg-[#d9d5cc] flex">
      {/* LEFT TEXT */}
      <div className="font-serif flex flex-col w-1/2">

        <div className="px-20 pt-30">
          <h2 className="text-5xl font-semibold text-[#1f3b2c] mb-9">Live a fulfilling life.</h2>
          
          <p className="text-[#1f3b2c] text-xl mb-4">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>
          <p className="text-[#1f3b2c] text-xl">
            It's easy to feel like you're alone in facing these challenges, but
            I want you to know that I'm here to help.
          </p>
        </div>

        <div className="mt-auto w-full">
          <button className={styles.button}>GET IN TOUCH →</button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2">
        <img src="/about.jpg" alt="Lifestyle" />
      </div>
    </section>
  );
}
