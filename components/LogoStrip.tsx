"use client";

// Data-driven logo bands. To add a logo: drop the file in public/assets/logos/
// and add an entry here. `dark: true` puts it on a dark chip (for white logos).
type Logo = { name: string; file: string; dark?: boolean };

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
  { name: "Y Combinator", file: "y-combinator.svg", dark: true },
  { name: "Techstars", file: "techstars.svg" },
  { name: "On Deck", file: "on-deck.svg" },
  { name: "Owl Ventures", file: "owl-ventures.webp" },
  { name: "Reach Capital", file: "reach-capital.png" },
  { name: "Microsoft", file: "microsoft.svg" },
  { name: "Gates Foundation", file: "gates-foundation.png" },
  { name: "Walton", file: "walton.svg" },
  { name: "MSDF", file: "msdf.svg" },
];

function Band({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="logoband reveal">
      <div className="lab">{label}</div>
      <div className="logorow">
        {logos.map((l) => (
          <span key={l.name} className={`lchip${l.dark ? " dark" : ""}`} data-name={l.name}>
            <img
              src={`/assets/logos/${l.file}`}
              alt={l.name}
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                img.parentElement?.classList.add("noimg");
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <>
      <Band label="Clients we've worked with" logos={clients} />
      <Band label="We've upskilled leaders in product & AI from" logos={upskilled} />
      <Band label="Our clients are backed by" logos={backers} />
    </>
  );
}
