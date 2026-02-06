import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto px-10 py-20">
      {/* Image */}
      <div className="w-full max-w-2xl h-[920px] overflow-hidden rounded-t-[320px] rounded-b-md group md:-ml-25 -mt-8">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div>
        <h1 className={`${dmSans.className} text-5xl font-semibold text-green-900 mb-6 leading-tight`}>
          Live your life <br /> in full bloom
        </h1>

        <p className="text-green-800 mb-8">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="border border-green-900 px-8 py-3 hover:bg-green-900 hover:text-white transition">
          CONNECT WITH ME →
        </button>
      </div>
    </section>
  );
}
