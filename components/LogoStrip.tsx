"use client";

// Data-driven logo bands, each an infinite-scroll carousel. To add a logo: drop
// the file in public/assets/logos/ and add an entry here.
//   dark:   true  -> dark chip (for reversed/white logos that have color elements)
//   invert: true  -> light chip, but CSS-invert a pure-white logo to render dark
type Logo = { name: string; file: string; dark?: boolean; invert?: boolean };

const clients: Logo[] = [
  { name: "General Assembly", file: "general-assembly.png" },
  { name: "Springboard", file: "springboard.png" },
  { name: "Cloudforce", file: "cloudforce.png" },
  { name: "100 School", file: "100-school.png" },
  { name: "Reforge", file: "reforge.png" },
  { name: "African Leadership Group", file: "alx.png", dark: true },
  { name: "Willow", file: "willow.png" },
  { name: "Quizizz", file: "quizizz.svg" },
  { name: "Penn GSE", file: "penn-gse.png" },
  { name: "Shine Early Learning", file: "shine.png" },
  { name: "Promise Venture Studio", file: "promise-venture-studio.png" },
  { name: "Diffusion Venture Studio", file: "diffusion.png" },
  { name: "Mindset Copilot", file: "mindset-copilot.png" },
];

const upskilled: Logo[] = [
  { name: "Google", file: "google.svg" },
  { name: "Handshake", file: "handshake.svg" },
  { name: "JPMorgan", file: "jpmorgan.svg" },
  { name: "BCG", file: "bcg.webp" },
  { name: "Vanta", file: "vanta.png" },
  { name: "Ocado Retail", file: "ocado.png" },
  { name: "HiBob", file: "hibob.png" },
  { name: "Disney", file: "disney.svg" },
];

const backers: Logo[] = [
  { name: "a16z", file: "a16z.png" },
  { name: "Tiger Global", file: "tiger-global.png" },
  { name: "Y Combinator", file: "y-combinator.svg", invert: true },
  { name: "Techstars", file: "techstars.svg" },
  { name: "On Deck", file: "on-deck.svg" },
  { name: "Owl Ventures", file: "owl-ventures.webp" },
  { name: "Reach Capital", file: "reach-capital.png" },
  { name: "Microsoft", file: "microsoft.svg" },
  { name: "Gates Foundation", file: "gates-foundation.png" },
  { name: "Walton", file: "walton.svg" },
  { name: "MSDF", file: "msdf.svg" },
];

function Chip({ logo, ariaHidden }: { logo: Logo; ariaHidden: boolean }) {
  return (
    <span
      className={`lchip${logo.dark ? " dark" : ""}${logo.invert ? " inv" : ""}`}
      data-name={logo.name}
      aria-hidden={ariaHidden || undefined}
    >
      <img
        src={`/assets/logos/${logo.file}`}
        alt={ariaHidden ? "" : logo.name}
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          img.parentElement?.classList.add("noimg");
        }}
      />
    </span>
  );
}

// One band = an infinite marquee. The track holds 4 copies of the row so a single
// "half" is always wider than the viewport; the CSS animates it by -50% for a
// seamless loop. Speed is kept consistent (~2.6s per logo) regardless of row length.
function Band({ label, logos, reverse }: { label: string; logos: Logo[]; reverse?: boolean }) {
  const copies = 4;
  const durationSec = Math.round(logos.length * 5.2);
  return (
    <div className="logoband reveal">
      <div className="lab">{label}</div>
      <div className="logomarquee">
        <div
          className={`logotrack${reverse ? " rev" : ""}`}
          style={{ ["--dur" as string]: `${durationSec}s` }}
        >
          {Array.from({ length: copies }).flatMap((_, copy) =>
            logos.map((l, i) => <Chip key={`${copy}-${i}`} logo={l} ariaHidden={copy > 0} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <>
      <Band label="Clients we've worked with" logos={clients} />
      <Band label="We've upskilled leaders in product & AI from" logos={upskilled} reverse />
      <Band label="Our clients are backed by" logos={backers} />
    </>
  );
}
