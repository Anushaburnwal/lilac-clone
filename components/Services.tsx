export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-3xl font-semibold mb-12 text-center">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {["Individual Therapy", "Anxiety Support", "Life Transitions"].map(
          (service) => (
            <div
              key={service}
              className="border p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium mb-4">{service}</h3>
              <p className="text-gray-600">
                Supportive therapy designed to help you grow, heal,
                and navigate life with clarity.
              </p>
            </div>
          )
        )}

      </div>
    </section>
  );
}
