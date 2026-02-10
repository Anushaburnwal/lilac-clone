"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function Footer() {
  const { ref, show } = useReveal();

  const fade = (delay: string) =>
    `transform transition-all duration-700 ease-out
     ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} ${delay}`;

  const underlineLink =
    "relative inline-block text-[20px] transition-transform duration-200 hover:translate-x-[3px] \
     after:absolute after:left-0 after:-bottom-[2px] after:h-px after:w-full after:bg-[#1f3b2c] \
     after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-[0.6]";

  return (
    <footer ref={ref} className="w-full bg-[#FFF7F3] text-[#1f3b2c]">
      {/* TOP */}
      <div
        className="
          grid grid-cols-[2fr_1fr_1fr] gap-10
          px-[80px] pt-[100px] pb-[130px]
          max-[1000px]:grid-cols-1
          max-[1000px]:text-center
          max-[1000px]:px-10 max-[1000px]:py-20
        "
      >
        {/* LEFT */}
        <div className={fade("delay-100")}>
          <h2 className="text-[43px] font-bold mb-6">
            Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-[20px] leading-[1.8] mb-2">
            Licensed Clinical Psychologist <br />
            123th Street 45 W, Santa Monica, CA 90401 <br />
            In-person & Telehealth Therapy
          </p>

          <p className="mt-2">
            <a
              href="mailto:email@example.com"
              className={underlineLink}
            >
              email@example.com
            </a>
            <br />
            <a
              href="tel:5555555555"
              className={underlineLink}
            >
              (555) 555-5555
            </a>
          </p>
        </div>

        {/* MIDDLE */}
        <div
          className={`${fade("delay-300")} justify-self-end max-[1000px]:justify-self-center`}
        >
          <h3 className="text-[35px] font-bold mb-5">Hours</h3>
          <p className="text-[20px] leading-[1.8]">
            Monday – Friday <br />
            10am – 6pm
          </p>
        </div>

        {/* RIGHT */}
        <div
          className={`${fade("delay-500")} justify-self-end max-[1000px]:justify-self-center`}
        >
          <h3 className="text-[35px] font-bold mb-5">Find</h3>

          <nav className="flex flex-col gap-2 max-[1000px]:items-center">
            <Link href="/" className={underlineLink}>
              Home
            </Link>
            <Link href="/contact" className={underlineLink}>
              Contact
            </Link>
            <Link href="/blog" className={underlineLink}>
              Blog
            </Link>
          </nav>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className={`${fade("delay-700")} bg-[#E6B2BA] text-center px-4 py-[60px]`}
      >
        <div className="mb-4">
          {[
            "Privacy & Cookies Policy",
            "Good Faith Estimate",
            "Website Terms & Conditions",
            "Disclaimer",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`${underlineLink} mx-2 text-[16px] font-bold`}
            >
              {item}
            </a>
          ))}
        </div>

        
        <p className="text-[16px] mt-[60px]">
          © 2026 Dr. Maya Reynolds, PsyD — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
