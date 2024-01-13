import Link from "next/link";

const recommendations = [
  {
    name: "Ayat Kursi",
    href: "/2?verse=255",
  },
  {
    name: "Surah Yasin",
    href: "/36",
  },
  {
    name: "Surah Al-Mulk",
    href: "/67",
  },
  {
    name: "Surah Ar-Rahman",
    href: "/55",
  },
  {
    name: "Surah Al-Waqi'ah",
    href: "/56",
  },
  {
    name: "Surah Al-Kahf",
    href: "/18",
  },
  {
    name: "Surah Al-Muzammil",
    href: "/73",
  },
  {
    name: "Surah Al-'Alaq",
    href: "/96",
  },
];

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/tentang-alquran", label: "About Us" },
  { href: "#", label: "Donate" },
  { href: "#", label: "Developers" },
  { href: "#", label: "Help" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="text-sm sm:text-base p-5 m-auto md:w-11/12 sm:flex sm:gap-32 mb-12 dark:border-zinc-300 border-t-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:flex-row-reverse">
          <div className="mb-6">
            <h1 className="text-xl font-semibold">i-Recite</h1>
            <h2 className="text-sm sm:text-base font-bold my-2">
              Al-Quran dengan terjamahan dan tafsir bahasa Indonesia
            </h2>
            <p>
              i-Recite is Almsgiving Jariyah. We hope to make it easy for
              everyone to read, study, and explore the noble Quran.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Navigasi</h1>
            <div className="flex flex-wrap gap-2">
              {navigationLinks.map(({ label, href }, i) => (
                <Link
                  className="p-2 border-[1.5px] rounded w-fit hover:text-sec-color-light hover:border-sec-color-light hover:glow"
                  key={i}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-xl font-semibold">Rekomendasi</h1>
            <div className="flex flex-wrap gap-2">
              {recommendations.map(({ name, href }, i) => (
                <Link
                  className="p-2 border-[1.5px] rounded w-fit hover:text-sec-color-light hover:border-sec-color-light hover:glow"
                  key={i}
                  href={href}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center text-xs mt-4 md:col-span-2 lg:col-span-3">
            <p className="text-sm">
              © {currentYear} i-Recite. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
