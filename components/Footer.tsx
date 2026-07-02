import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div>
          <span
            className="logo"
            style={{ display: "inline-grid", verticalAlign: "middle", marginRight: 8 }}
          >
            LXD
          </span>{" "}
          Learning By Design AI · AI By Design
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/">Home</Link>
          <a href="http://linkedin.com/company/learningxdesign">LinkedIn</a>
          <a href="https://learningbydesign.substack.com">Substack</a>
          <a href="https://cal.com/davidfu/30min">Book a call</a>
        </div>
      </div>
    </footer>
  );
}
