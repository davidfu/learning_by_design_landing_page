# /gtm — GTM By Design AI: page plan

Built on Julian Shapiro's landing page framework:
**Purchase rate = Desire − (Labor + Confusion).**
Order: Navbar → Hero → Social proof → CTA → Features & objections (3–6) → Repeat CTA → Footer.

Live file: `gtm.html` (served at `learningbydesign.ai/gtm` via `cleanUrls`).

---

## 1. Positioning (the "unlock")

| | |
|---|---|
| **Who** | B2B founders (edtech or otherwise) at seed or bootstrapped (~$250–300K revenue), hiring their **first non-founder salesperson** (AE or BDR/SDR). Secondary: Series A teams that need RevOps + enablement. |
| **Poor alternative** | Hire the rep into a CRM graveyard with no list, and let them spend their first 90 days cleaning data and sending generic sequences. |
| **Why we're better** | We set up the CRM, build and clean the target list, and deploy AI agents that research, personalize, and sequence outbound, *before or as* the rep starts. AI-native, and the client owns everything. |
| **Proof of the bold claim** | Chestnut: the new AE booked ICP meetings by the end of his first week. |
| **One-line category** | A GTM and AI deployment firm for B2B companies hiring their first non-founder salesperson. |

### Stage ladder (from the Sash conversation)
- **Seed:** first AE hire, CRM migration, AI-native outbound engine → *on the page*
- **Series A:** traction/PMF → build the sales team, RevOps → *on the page*
- **Series B:** enablement → *left off for now to keep focus; add later as a third card if needed*

---

## 2. Hero: header options (Julian: specific + hook)

**Chosen (bold claim hook):**
> **Your first sales hire, booking meetings in week one.**

Alternatives to A/B test:
1. *Objection hook:* "Don't hire your first AE into a CRM graveyard."
2. *Descriptive:* "AI-native RevOps for B2B teams hiring their first salesperson."
3. *Outcome:* "From founder-led sales to a pipeline your first rep can run."
4. *Brand-led:* "GTM By Design: the revenue engine your first sales hire plugs into."

**Subheader (how it works, 1–2 sentences):**
> Before your first non-founder AE or SDR starts, we migrate and clean your CRM, build your ICP target list, and deploy AI agents that research, personalize, and sequence outbound. They start selling on day one, not spending their first 90 days cleaning up data.

**Hero visual:** a "Your new AE's first week" timeline (Day 1 CRM → Day 2 list → Day 3 agents draft → Day 5 meetings booked). Julian says to show the product in action, not abstract art.

**CTA (continues the narrative, not "Request a meeting"):** "Plan your first sales hire" → cal.com/davidfu/30min

---

## 3. Social proof

**Stat strip:** Week 1 (Chestnut) · ~5x (Willow) · $1M+ pipeline / $150K closed (100 School) · $100K+ from NSVF (XtraMath)

**Logos: "GTM engines we've built":** Willow · Chestnut · Edstruments · 100 School · XtraMath
**"Our GTM clients are backed by":** a16z · CSGF · Transcend Network · NewSchools Venture Fund

| Client | Backer shown |
|---|---|
| Chestnut | a16z |
| Willow | Transcend, CSGF |
| Edstruments | CSGF |
| XtraMath | NSVF |
| 100 School | (none listed; add if there is one) |

---

## 4. Problem (increases desire)
"Your first salesperson usually doesn't fail on talent. They fail on setup."
1. The CRM is a graveyard. → first month lost to data entry
2. There's no real target list. → generic outreach to the wrong people
3. Outbound doesn't scale past you. → a salary with no pipeline

## 5. Features & objections (5 value props, each = header + paragraph + visual + objection)

| # | Header | Objection handled |
|---|---|---|
| 01 CRM & RevOps | A clean CRM before the rep's first login. | "We're mid-switch between tools." |
| 02 Target list | Your ICP, turned into a list someone else can work. | "Our market is niche." |
| 03 AI outbound agents | Agents that research, personalize, and sequence. Humans that send. | "AI outreach reads like spam." |
| 04 The hire itself | Help hiring the right rep, including an AI-native SDR. | "AE vs. SDR?" |
| 05 Ownership | You own the stack, the agents, and the playbook. | "Will we be dependent on you?" |

## 6. By stage: Seed/bootstrapped vs. Series A cards

## 7. Case studies (Problem / Action / Result, matching the 100 School slide format)
1. **Chestnut** (a16z, insurtech): Week-1 meetings
2. **Willow Education** (Transcend, CSGF): 50+ meetings, ~5x trajectory, James quote
3. **100 School**: 20,000+ sign-ups, 3 closed (BCG · Vanta · Ocado Retail), $150K closed / >$1M pipeline, Max quote
4. **Edstruments** (CSGF): *In progress*, target 5–10 meetings/month
5. **XtraMath** (NSVF): $100K+ funding unlocked; the "same engine applied to funders" story

## 8. FAQ / objections
Not edtech? · Hire first or build first? · Which tools? · Isn't cold email dead? · How long? · Who does the work?

## 9. Fit / not a fit · 10. Team (David + Vedansh) · 11. Repeat CTA "Make week one count."

---

## Open items for David
- [ ] **Logos:** drop `edstruments.png`, `csgf.png`, `nsvf.png` into `assets/logos/`. The page already points at those paths and shows a text chip until the files exist.
- [ ] Confirm **CSGF = Charter School Growth Fund** (the alt text uses that).
- [ ] Confirm it's OK to **name Chestnut** publicly (the outreach emails sometimes say "an a16z-backed seed insurtech").
- [ ] **XtraMath** Problem/Action copy is generic. Add specifics (which funders or partners, timeframe).
- [ ] Booking link: the site uses `cal.com/davidfu/30min` and the outreach emails use `calendly.com/davidfu`. Pick one.
- [ ] Add **Felix** to the team strip if he's client-facing on GTM builds.
- [ ] Consider adding **LeanLab** ($250K closed in 90 days) as a sixth case.
- [ ] Decide what happens to the older `revenue-os.html` (it overlaps this page): redirect it to `/gtm`?
- [ ] Julian's feedback step: show the page to 2 people outside the market and 2 inside, and rate conversion / interest / clarity / expansion / brevity / disbelief.
