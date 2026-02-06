export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 py-20">

      <div>
        <h2 className="text-3xl font-semibold mb-6">
          Meet Your Therapist
        </h2>

        <p className="text-gray-600 leading-relaxed">
          I provide compassionate therapy focused on personal growth,
          emotional resilience, and self-discovery. Together we’ll
          create a safe space to explore your journey.
        </p>
      </div>

      <div>
        <img
          src="/about.jpg"
          alt="Therapist"
          className="rounded-lg w-full object-cover"
        />
      </div>

    </section>
  );
}
