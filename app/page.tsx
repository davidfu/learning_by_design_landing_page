import LogoStrip from "@/components/LogoStrip";

export default function Home() {
  return (
    <>
      <a id="top" />

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Build AI By Design · Learning By Design AI</div>
            <h1>
              AI-native by design.
              <br />
              <span className="b">Or AI debt by default.</span>
            </h1>
            <p className="lede">
              We&rsquo;re an AI enablement team for B2B and edtech companies. We come alongside
              you to build the right things, the right way, your AI-native <b>product</b> or your{" "}
              <b>GTM</b>{" "}engine, then hand your team the keys. We don&rsquo;t just advise, and we
              don&rsquo;t stop at a strategy or insights. We upskill your team, build and ship
              skills, automations and agents with you.
            </p>
            <div className="hero-cta">
              <a className="btn gold" href="https://cal.com/davidfu/30min">
                Book a call with David &amp; Vedansh
              </a>
              <a className="btn ghost" href="#work">
                See the work
              </a>
            </div>
            <div className="chips"></div>
          </div>
          <div className="miniviz" aria-hidden="true">
            <div className="row top">
              <span className="tag">Built AI-native</span>
              <span className="pill">NO DEBT</span>
            </div>
            <div className="lbl">— the AI debt line —</div>
            <div className="row bot">
              <span className="tag">Built before AI</span>
              <span className="pill">tech · process · systems</span>
            </div>
            <p className="foot">We build the first. We clear the second.</p>
          </div>
        </div>
      </section>

      {/* SUBSTACK */}
      <section className="substack" id="substack">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">On our Substack</div>
            <h2>AI By Design — notes from the build.</h2>
            <p>
              Field notes on building AI-native product and GTM: what actually works, what breaks
              in the last 20%, and the moves we make with clients. New posts land on our Substack.
            </p>
            <div className="ss-cta">
              <a className="btn gold" href="/blog">
                Read all posts &rarr;
              </a>
              <a
                className="btn ghost"
                href="https://learningbydesign.substack.com"
                target="_blank"
                rel="noopener"
              >
                Open on Substack
              </a>
            </div>
          </div>
          <div className="substack-embed reveal">
            <iframe
              src="https://learningbydesign.substack.com/embed"
              width={480}
              height={320}
              scrolling="no"
              title="Subscribe to Learning By Design AI on Substack"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Track record</div>
            <h2>The company we keep.</h2>
          </div>
          <LogoStrip />
        </div>
      </section>

      {/* CHOOSE YOUR OWN ADVENTURE */}
      <section id="find" className="selector">
        <div className="wrap">
          <div className="canvas reveal">
            <div className="cv-pad">
              <div className="hook-eyebrow">Where every edtech and B2B company sits right now</div>
              <h2>
                AI-native by design. <span className="db">Or AI debt by default.</span>
              </h2>
              <div className="grid animate">
                <div className="corner"></div>
                <div className="colh before">
                  Before Claude Code<small>built the old way</small>
                </div>
                <div className="colh after">
                  After Claude Code<small>native from day one</small>
                </div>
                <div className="rowh">
                  <span className="rl">
                    Product
                    <br />& Tech
                  </span>
                  <span className="rp">
                    Product
                    <br />By Design
                  </span>
                </div>
                <div className="cell before">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="4" x2="25" y2="4" />
                      <line x1="7" y1="28" x2="25" y2="28" />
                      <path d="M9 4 L9 8 L16 16 L23 8 L23 4" />
                      <path d="M9 28 L9 24 L16 16 L23 24 L23 28" />
                    </svg>
                  </div>
                  <div className="pain">Months to ship what rivals do in days.</div>
                  <div className="bill">The cost: you fall further behind every sprint.</div>
                  <div className="move">
                    <span className="ar">&rarr;</span>Build muscle and systems to ship at AI-speed.
                  </div>
                </div>
                <div className="cell after">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4 L29 27 L3 27 Z" />
                      <line x1="16" y1="13" x2="16" y2="20" />
                      <line x1="16" y1="23.5" x2="16" y2="23.6" />
                    </svg>
                  </div>
                  <div className="pain">Shipping more code doesn&rsquo;t equal better products.</div>
                  <div className="bill">The cost: spaghetti or vibe-coded apps that break.</div>
                  <div className="move">
                    <span className="ar">&rarr;</span>Agentic build loops, from day one.
                  </div>
                </div>
                <div className="rowh">
                  <span className="rl">GTM</span>
                  <span className="rp">
                    Marketing
                    <br />& Sales
                  </span>
                </div>
                <div className="cell before">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="28" x2="29" y2="28" />
                      <line x1="7" y1="28" x2="7" y2="22" />
                      <line x1="14" y1="28" x2="14" y2="9" />
                      <line x1="21" y1="28" x2="21" y2="24" />
                      <line x1="27" y1="28" x2="27" y2="16" />
                    </svg>
                  </div>
                  <div className="pain">No capacity or systems to test channels and double down.</div>
                  <div className="bill">The cost: scaling cold email or a channel too early.</div>
                  <div className="move">
                    <span className="ar">&rarr;</span>Find the strategy and channels, then the agents and systems to win.
                  </div>
                </div>
                <div className="cell after">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="22" height="12" rx="2.5" />
                      <line x1="28.5" y1="15" x2="28.5" y2="19" />
                      <rect x="6" y="14" width="3.5" height="6" rx="1" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div className="pain">One maxed-out person managing people and agent output.</div>
                  <div className="bill">The cost: growth capped at headcount.</div>
                  <div className="move">
                    <span className="ar">&rarr;</span>An owned engine. Clay to Claude to meetings booked with your ICP.
                  </div>
                </div>
                <div className="debtline">
                  <span>the AI debt line</span>
                </div>
              </div>
            </div>
            <div className="cv-foot">
              <span className="brandmark">
                <span className="logo">AI</span>AI By Design · Learning By Design AI
              </span>
              <span className="fn">Product By Design AI{" · "}GTM By Design AI</span>
            </div>
          </div>

          <div className="connector reveal">
            <div className="line"></div>
            <span className="lbl">Found your square? Here&rsquo;s the build</span>
            <div className="line"></div>
          </div>

          <div className="canvas reveal">
            <div className="cv-pad">
              <div className="hook-eyebrow">Whichever square you&rsquo;re in</div>
              <h2>
                We build it with you. <span className="db">Then your team runs it.</span>
              </h2>
              <div className="grid animate">
                <div className="corner"></div>
                <div className="colh before">
                  <span className="emo">🌳</span>Legacy edtech<small>built more than 2 years ago</small>
                </div>
                <div className="colh after">
                  <span className="emo">🌱</span>New builds<small>started in the last 2 years</small>
                </div>
                <div className="rowh">
                  <span className="rl">
                    Product
                    <br />& Tech
                  </span>
                  <span className="rp">
                    Product
                    <br />By Design
                  </span>
                </div>
                <div className="cell before">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="14" cy="14" r="9" />
                      <line x1="20.5" y1="20.5" x2="28" y2="28" />
                      <path d="M10 14 h8 M14 10 v8" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="ocell">Validate strategy, stack, and speed.</div>
                  <div className="detail">
                    We map <b>what to refactor vs rebuild</b> for high-speed, AI-enabled shipping,
                    then help you ship it.
                  </div>
                </div>
                <div className="cell after">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4 L27 10 L27 22 L16 28 L5 22 L5 10 Z" />
                      <path d="M5 10 L16 16 L27 10 M16 16 L16 28" />
                    </svg>
                  </div>
                  <div className="ocell">Stand up an AI-native product practice.</div>
                  <div className="detail">
                    <b>Claude Code, agentic loops, eval-driven.</b> Native from day one, with no debt
                    to rip out later.
                  </div>
                </div>
                <div className="rowh">
                  <span className="rl">GTM</span>
                  <span className="rp">
                    Marketing
                    <br />& Sales
                  </span>
                </div>
                <div className="cell before">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="12" r="4" />
                      <circle cx="21" cy="12" r="4" />
                      <path d="M4 27 C4 21 8 18.5 11 18.5 C14 18.5 18 21 18 27 M15 27 C15 21.5 19 18.5 21 18.5 C24 18.5 28 21 28 27" />
                    </svg>
                  </div>
                  <div className="ocell">Upskill GTM into shared workflows and agents.</div>
                  <div className="detail">
                    A <b>skills library and a champion who owns it</b>, so the whole team levels up,
                    not one rep.
                  </div>
                </div>
                <div className="cell after">
                  <div className="ic">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="5" width="24" height="6" rx="1.6" />
                      <rect x="4" y="13" width="24" height="6" rx="1.6" />
                      <rect x="4" y="21" width="24" height="6" rx="1.6" />
                      <circle cx="8" cy="8" r="0.9" fill="currentColor" />
                      <circle cx="8" cy="16" r="0.9" fill="currentColor" />
                      <circle cx="8" cy="24" r="0.9" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="ocell">Build GTM foundations on an owned stack.</div>
                  <div className="detail">
                    Off Webflow. <b>Custom build, deploy on Vercel or Netlify.</b> The migration is
                    the on-ramp.
                  </div>
                </div>
                <div className="debtline"></div>
              </div>
              <div className="askrow">
                <a className="ask" href="https://cal.com/davidfu/30min">
                  Let&rsquo;s find your first build &rarr;
                </a>
              </div>
            </div>
            <div className="cv-foot">
              <span className="brandmark">
                <span className="logo">AI</span>AI By Design · Learning By Design AI
              </span>
              <span className="fn">Product By Design AI{" · "}GTM By Design AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN-FIRST BELIEF */}
      <section className="belief">
        <div className="wrap reveal">
          <h2>
            To become AI-first, you have to be <span className="g">human-first.</span>
          </h2>
          <p>
            We start with the people: understand and empower your team, understand and empower your
            customers, and the stakeholders around them. The tools only compound once the humans do.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Two offerings, two pillars</div>
            <h2>Build the right things. The right way. With your team.</h2>
            <p>
              Whether you&rsquo;re clearing debt or building greenfield, the work runs on two
              pillars: your product and your go-to-market. We build both, then leave your team able
              to run them.
            </p>
          </div>
          <div className="offer-grid">
            <div className="offer product reveal">
              <span className="bar"></span>
              <div className="kicker">Product By Design AI</div>
              <h3>AI-native products, built to ship fast.</h3>
              <p>
                A fractional product and engineering practice that lives on your team, from
                architecture to shipped features, with Vedansh leading the build.
              </p>
              <ul>
                <li>
                  Architecture on AWS that runs a full product for <b>$20 to $50 a month</b> and
                  holds as you scale
                </li>
                <li>
                  <b>Migrations with no downtime</b>, infra cost down $100 to $1,000+ a month
                </li>
                <li>
                  Full CI/CD with zero management, so the team ships instead of babysitting deploys
                </li>
                <li>
                  AI-native builds, including voice and multi-agent systems,{" "}
                  <b>not features bolted onto an old stack</b>
                </li>
                <li>One experienced CTO doing the work of a senior team, no headcount added</li>
              </ul>
            </div>
            <div className="offer gtm reveal">
              <span className="bar"></span>
              <div className="kicker">GTM By Design AI</div>
              <h3>AI-native pipeline, and the systems under it.</h3>
              <p>
                Strategy, systems, and skills for sales and marketing, so a lean team performs like
                a much bigger one, and attention turns into pipeline turns into revenue.
              </p>
              <ul>
                <li>
                  A custom site and owned stack, off no-code, deployed on <b>Vercel or Netlify</b>
                </li>
                <li>CRM implemented and configured right, with the data plumbing to back it</li>
                <li>
                  A notetaker wired in via <b>MCP</b>, so every sales and validation call flows into
                  dashboards
                </li>
                <li>
                  Dashboards that refresh on a schedule for objections, insights, and competitor
                  mentions
                </li>
                <li>Shared workflows, agents, and a champion who owns the skills library</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPIKY POVs */}
      <section id="pov" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Where we&rsquo;re opinionated</div>
            <h2>A few things we&rsquo;ll tell you that others won&rsquo;t.</h2>
          </div>
          <div className="povs">
            <div className="pov reveal">
              <div className="n">On outbound</div>
              <h3>Cold email is broken.</h3>
              <p>
                Don&rsquo;t pour money into it until you&rsquo;re well past <b>$500K ARR</b>. We help
                you build the skills and hire an offshore BDR for hyper-personalized, human-driven
                outbound that actually gets replies and meetings, running ongoing at{" "}
                <b>under $1,500 a month</b> once ramped.
              </p>
            </div>
            <div className="pov reveal">
              <div className="n">On building with AI</div>
              <h3>The last 20% is the whole job.</h3>
              <p>
                AI gets you a prototype in an afternoon. Getting it into your real stack, your cloud,
                your data is where <b>70% faster quietly becomes 15%</b>. That gap is exactly where
                we live.
              </p>
            </div>
            <div className="pov reveal">
              <div className="n">On your stack</div>
              <h3>Faster typing isn&rsquo;t AI-native.</h3>
              <p>
                Engineers using a chatbot to type faster is not the same as an AI-native practice.
                We stand up the <b>agentic build loops</b> that compound, so speed comes from the
                system, not from one person going faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / WEDGE */}
      <section id="wedge" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="wedge reveal">
            <div>
              <div className="eyebrow" style={{ color: "#7a5a26" }}>
                Start here · the on-ramp
              </div>
              <h2>Everyone needs to get off website builders.</h2>
              <p>
                Webflow, Squarespace, Wix, and WordPress limit customization, speed, and your
                ability to use AI to spin up new pages, offers, case studies, and posts on demand.
                We migrate you to a custom stack on Vercel or Netlify, preserving your SEO and
                everything already working, so your site becomes something you and your AI/agents can
                build on.
              </p>
              <p className="proof">
                Already done it: one client off Webflow, an insurtech company in progress.
              </p>
            </div>
            <div className="wedge-card">
              <div className="big">Website migration</div>
              <div className="price">starts at $5,000</div>
              <p>
                About half what most shops charge. Add-ons: SEO/AEO, larger page sets, email lists.
                A concrete first project that pays for itself.
              </p>
              <a className="btn gold" href="https://cal.com/davidfu/30min">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / CASE STUDIES */}
      <section id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Where we&rsquo;ve done this before</div>
            <h2>We don&rsquo;t just advise. We come alongside you and build.</h2>
            <p>
              Real roles where we owned the outcome across product, GTM, and AI-native builds, and
              turned it into revenue, velocity, and AI systems that compound.
            </p>
          </div>

          <div className="group-label reveal">
            AI-native GTM · attention into pipeline into revenue
          </div>
          <div className="cards">
            <div className="case reveal">
              <div className="nm">Willow Education</div>
              <div className="meta">K12 career &amp; college readiness · founder-led → AI-native</div>
              <div className="stat">50+</div>
              <div className="statlabel">
                meetings from 500+ targeted accounts; 2,000+ ICPs identified; on track for ~5x
                revenue
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">100 School</div>
              <div className="meta">AI upskilling · B2C → B2B pivot</div>
              <div className="stat">$1M+</div>
              <div className="statlabel">
                pipeline, $150K closed; pilots with BCG, Vanta, Ocado Retail, and counting
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">LeanLab Education</div>
              <div className="meta">Edtech efficacy research · repositioned to a new ICP</div>
              <div className="stat">$250K</div>
              <div className="statlabel">
                closed in 90 days; clients incl. Magic School + McGraw Hill; handed to a full-time
                hire
              </div>
            </div>
          </div>

          <div className="group-label reveal">
            Product 0→1 at scale · when there&rsquo;s no playbook and the stakes are real
          </div>
          <div className="cards">
            <div className="case reveal">
              <div className="nm">African Leadership Group</div>
              <div className="meta">Pan-African workforce dev · Group PM + Director</div>
              <div className="stat">10x</div>
              <div className="statlabel">
                user growth across 25 countries; activation 60→90%, retention 25→60%
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">Cloudforce nebulaONE</div>
              <div className="meta">Series A AI platform · Owl Ventures, Microsoft</div>
              <div className="stat">3x</div>
              <div className="statlabel">
                token usage; spun up a Labs workstream; matured product strategy and roadmap
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">CNA Simulations</div>
              <div className="meta">Healthcare learning · VP Product</div>
              <div className="stat">$850K</div>
              <div className="statlabel">
                workforce grant landed; AI voice-over across 4 languages and 100,000+ words
              </div>
            </div>
          </div>

          <div className="group-label reveal">
            Practice building · turning bespoke delivery into a product, an ICP, and a GTM system
          </div>
          <div className="cards">
            <div className="case reveal">
              <div className="nm">JFF Labs</div>
              <div className="meta">Innovation arm, Jobs for the Future</div>
              <div className="stat">Published</div>
              <div className="statlabel">
                GenAI-in-workforce-dev landscape report; productization roadmap; mid-market ICP found
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">Shine / Acelero</div>
              <div className="meta">Scaled early-childhood provider · BlackRock-backed</div>
              <div className="stat">5 areas</div>
              <div className="statlabel">
                AI-accelerated roadmaps; a reusable buy/build/partner decision framework
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">Imagine Worldwide</div>
              <div className="meta">Pan-African K12 edtech &amp; efficacy nonprofit</div>
              <div className="stat">4 countries</div>
              <div className="statlabel">
                AI product + partner landscape; a next-phase roadmap for leadership
              </div>
            </div>
          </div>

          <div className="group-label reveal">
            AI-native product builds · the build team, led by Vedansh
          </div>
          <div className="cards">
            <div className="case reveal">
              <div className="nm">ReachAll AI</div>
              <div className="meta">Voice AI · Fortune 500 · built from zero</div>
              <div className="stat">{"<"}300ms</div>
              <div className="statlabel">
                latency vs 700–800ms standard; 3x cost reduction; 99.99% uptime
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">JetWriter AI</div>
              <div className="meta">AI writing · multi-model Claude/GPT/Gemini</div>
              <div className="stat">500K+</div>
              <div className="statlabel">
                users, $20K MRR in year one; rebuilt as the model landscape shifted
              </div>
            </div>
            <div className="case reveal">
              <div className="nm">Tryo</div>
              <div className="meta">Try-before-you-buy marketplace · built from zero</div>
              <div className="stat">10K</div>
              <div className="statlabel">orders per month, every delivery under 60 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">The team</div>
            <h2>
              Real builders who roll up their sleeves. Not consultants who leave you with playbooks
              without execution. Not just advice or strategy.{" "}
            </h2>
          </div>
          <div className="team-grid">
            <div className="person lead reveal">
              <div className="av">DF</div>
              <h4>David Fu</h4>
              <div className="role">Founder · GTM + product + AI enablement</div>
              <p>
                15 years at the intersection of AI, GTM, product, and learning. Barclays banker
                turned Streetlight Schools co-founder, Group PM at African Leadership Group (10x
                scale), Reforge, and adjunct at Penn GSE. Now builds AI-native GTM and product for
                100 School, Cloudforce, Willow, LeanLab, and JFF.
              </p>
            </div>
            <div className="person lead reveal">
              <div className="av">VG</div>
              <h4>Vedansh Garg</h4>
              <div className="role">Fractional CTO · build lead</div>
              <p>
                Ships AI-native products end to end, from Fortune 500 to startups. ReachAll voice AI
                (sub-300ms, 3x cost cut), JetWriter (500K users), Tryo (10K orders/mo). Architecture
                that runs a full product for $20–50/mo, migrations with no downtime, and CI/CD nobody
                has to babysit.
              </p>
            </div>
            <div className="person reveal">
              <div className="av">NF</div>
              <h4>Nicholas Fok</h4>
              <div className="role">Quant → AI product</div>
              <p>
                Exited founder. Building AI native products with Owl AI and Incubator School.
                Previously built institutional risk and investment-allocation systems at CPP
                (Canadian Pension Plan Investments) and Liberty Mutual.
              </p>
            </div>
            <div className="person reveal">
              <div className="av">LM</div>
              <h4>Louis Masensi</h4>
              <div className="role">Production delivery</div>
              <p>
                Runs a team of developers that are Claude-certified builders. Ships production
                software, not prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="quotes">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow" style={{ color: "var(--gold)" }}>
              Voices
            </div>
            <h2>What founders and leaders say.</h2>
          </div>
          <div className="qgrid">
            <div className="quote reveal">
              <p>
                &quot;LXD helped me build Willow&rsquo;s B2B GTM engine. We were getting ~25% open
                rates but no replies, so we pivoted to highly personalized outbound. A new CRM, 150
                personalized emails and 5+ high-value meetings a week. At ASU GSV, I did 2-3 months
                of work in 3 days. The foundation has us on track for ~5x revenue growth.&quot;
              </p>
              <div className="who">James Cryan · CEO, Willow Education</div>
            </div>
            <div className="quote reveal">
              <p>
                &quot;LXD has been a cheat code for 100 School. He didn&rsquo;t just advise, he showed
                up like a cofounder, helping me align, prioritize, and face the hard decisions. The
                result: 7-figure pipeline created and 6-figures closed across major logos including
                BCG, Vanta, Ocado Retail, New Balance, and HG Capital portfolio companies Lucanet and
                Prophix.&quot;
              </p>
              <div className="who">Max Haining · CEO, 100 School</div>
            </div>
            <div className="quote reveal">
              <p>
                &quot;David is a one of one. He was the critical lynchpin behind a massive scale-up
                for a product that had hit product-market fit, growing revenue 10x in under a year.
                His leadership unlocks a new level in his teams: people perform higher and solve
                problems they hadn&rsquo;t before.&quot;
              </p>
              <div className="who">
                Seth Trudeau · then Chief Product Officer, African Leadership Group
              </div>
            </div>
            <div className="quote reveal">
              <p>
                &quot;LXD brought crucial energy and momentum to our tiger team when we needed GTM and
                productization expertise. They delivered a comprehensive market landscape analysis,
                went beyond simple sizing to uncover atypical insights, and gave leadership the
                clarity to make key strategic decisions.&quot;
              </p>
              <div className="who">Jennifer Giffels · then project lead, JFF Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="final">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">Let&rsquo;s go</div>
            <h2>
              Come build the right things,
              <br />
              the right way.
            </h2>
            <p>
              Book a call with David and Vedansh. Bring your site or your stack and we&rsquo;ll give
              you a real read on your product and GTM, and whether we&rsquo;re a fit.
            </p>
            <a
              className="btn gold"
              href="https://cal.com/davidfu/30min"
              style={{ fontSize: 17, padding: "15px 26px" }}
            >
              Book a call with David &amp; Vedansh
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
